const fs = require("fs");
const path = require("path");
const Book = require("../models/book");

module.exports = async ({ authors, series, primarchs }) => {
  await Book.deleteMany();

  const findAuthor = (slug) => {
    const author = authors.find((a) => a.slug === slug);
    if (!author) throw new Error(`Author not found: "${slug}"`);
    return author._id;
  };

  const findSeries = (slug) => {
    const s = series.find((s) => s.slug === slug);
    if (!s) throw new Error(`Series not found: "${slug}"`);
    return s._id;
  };

  const findPrimarch = (slug) => {
    const p = primarchs.find((p) => p.slug === slug);
    if (!p) throw new Error(`Primarch not found: "${slug}"`);
    return p._id;
  };

  const dataDir = path.join(__dirname, "data", "books");
  const files = fs.readdirSync(dataDir).filter((f) => f.endsWith(".json"));

  const allBooks = [];

  for (const file of files) {
    const raw = fs.readFileSync(path.join(dataDir, file), "utf-8");
    const entries = JSON.parse(raw);

    for (const entry of entries) {
      allBooks.push({
        ...entry,
        series: findSeries(entry.series),
        author: entry.author ? findAuthor(entry.author) : undefined,
        primarchs: (entry.primarchs || []).map(findPrimarch),
      });
    }
  }

  const books = await Book.insertMany(allBooks);
  console.log(`Books seeded: ${books.length}`);
  return books;
};
