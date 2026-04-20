require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });

const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
const Author = require("../models/author");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const IMAGES_DIR = path.resolve(__dirname, "../author-images");
const SUPPORTED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

async function run() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected\n");

  if (!fs.existsSync(IMAGES_DIR)) {
    console.log("No author-images folder found. Create it and add images named by author slug (e.g. dan-abnett.jpg).");
    return mongoose.connection.close();
  }

  const files = fs.readdirSync(IMAGES_DIR).filter((f) =>
    SUPPORTED_EXTENSIONS.includes(path.extname(f).toLowerCase())
  );

  if (files.length === 0) {
    console.log("No images found in /author-images. Add images named by author slug (e.g. dan-abnett.jpg).");
    return mongoose.connection.close();
  }

  const results = { uploaded: [], skipped: [], failed: [] };

  for (const file of files) {
    const slug = path.basename(file, path.extname(file));
    const filePath = path.join(IMAGES_DIR, file);

    const author = await Author.findOne({ slug });

    if (!author) {
      console.log(`  SKIP  ${slug} — no author found with this slug`);
      results.skipped.push(slug);
      continue;
    }

    if (author.image) {
      console.log(`  SKIP  ${slug} — image already set`);
      results.skipped.push(slug);
      continue;
    }

    try {
      const upload = await cloudinary.uploader.upload(filePath, {
        folder: "warhammer-authors",
        public_id: slug,
        overwrite: false,
      });

      await Author.updateOne({ slug }, { image: upload.secure_url });
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
