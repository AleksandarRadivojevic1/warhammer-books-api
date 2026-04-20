require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });

const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
const Primarch = require("../models/primarch");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const IMAGES_DIR = path.resolve(__dirname, "../primarch-images");
const SUPPORTED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

async function run() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected\n");

  if (!fs.existsSync(IMAGES_DIR)) {
    console.log("No primarch-images folder found. Create it and add images named by primarch slug (e.g. horus-lupercal.jpg).");
    return mongoose.connection.close();
  }

  const files = fs.readdirSync(IMAGES_DIR).filter((f) =>
    SUPPORTED_EXTENSIONS.includes(path.extname(f).toLowerCase())
  );

  if (files.length === 0) {
    console.log("No images found in /primarch-images. Add images named by primarch slug (e.g. horus-lupercal.jpg).");
    return mongoose.connection.close();
  }

  const results = { uploaded: [], skipped: [], failed: [] };

  for (const file of files) {
    const slug = path.basename(file, path.extname(file));
    const filePath = path.join(IMAGES_DIR, file);

    const primarch = await Primarch.findOne({ slug });

    if (!primarch) {
      console.log(`  SKIP  ${slug} — no primarch found with this slug`);
      results.skipped.push(slug);
      continue;
    }

    if (primarch.image) {
      console.log(`  SKIP  ${slug} — image already set`);
      results.skipped.push(slug);
      continue;
    }

    try {
      const upload = await cloudinary.uploader.upload(filePath, {
        folder: "warhammer-primarchs",
        public_id: slug,
        overwrite: false,
      });

      await Primarch.updateOne({ slug }, { image: upload.secure_url });
      console.log(`  OK    ${slug}`);
      results.uploaded.push(slug);
    } catch (err) {
      console.error(`  FAIL  ${slug} — ${err.message}`);
      results.failed.push(slug);
    }
  }

  console.log(`\nDone. Uploaded: ${results.uploaded.length} | Skipped: ${results.skipped.length} | Failed: ${results.failed.length}`);
  mongoose.connection.close();
}

run().catch((err) => {
  console.error(err);
  mongoose.connection.close();
  process.exit(1);
});
