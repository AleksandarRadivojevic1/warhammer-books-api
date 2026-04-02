require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });

const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
const Book = require("../models/book");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const COVERS_DIR = path.resolve(__dirname, "../covers");
const SUPPORTED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

async function run() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected\n");

  const files = fs.readdirSync(COVERS_DIR).filter((f) =>
    SUPPORTED_EXTENSIONS.includes(path.extname(f).toLowerCase())
  );

  if (files.length === 0) {
    console.log("No images found in /covers. Add images named by book slug (e.g. horus-rising.jpg).");
    return mongoose.connection.close();
  }

  const results = { uploaded: [], skipped: [], failed: [] };

  for (const file of files) {
    const slug = path.basename(file, path.extname(file));
    const filePath = path.join(COVERS_DIR, file);

    const book = await Book.findOne({ slug });

    if (!book) {
      console.log(`  SKIP  ${slug} — no book found with this slug`);
      results.skipped.push(slug);
      continue;
    }

    if (book.coverImage) {
      console.log(`  SKIP  ${slug} — cover already set`);
      results.skipped.push(slug);
      continue;
    }

    try {
      const upload = await cloudinary.uploader.upload(filePath, {
        folder: "warhammer-books",
        public_id: slug,
        overwrite: false,
      });

      await Book.updateOne({ slug }, { coverImage: upload.secure_url });
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
