const Primarch = require("../models/primarch");
const Book = require("../models/book");

const BASE_URL = "/api/v1";

const primarchUrl = (slug) => `${BASE_URL}/primarchs/${slug}`;
const bookUrl     = (slug) => `${BASE_URL}/books/${slug}`;

//Get all Primarchs
exports.getPrimarchs = async (req, res) => {
  try {
    const primarchs = await Primarch.find();

    const results = primarchs.map(p => ({
      name: p.name,
      slug: p.slug,
      legion: p.legion,
      status: p.status,
      alignment: p.alignment,
      url: primarchUrl(p.slug)
    }));

    res.json({
      count: results.length,
      results
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Get Primarch by slug
exports.getPrimarchBySlug = async (req, res) => {
  try {
    const primarch = await Primarch.findOne({ slug: req.params.slug });

    if (!primarch) {
      return res.status(404).json({ error: "Primarch not found" });
    }

    // Find books where this primarch appears
    const books = await Book.find({ primarchs: primarch._id })
      .select("title slug orderInSeries");

    res.json({
      name: primarch.name,
      slug: primarch.slug,
      legion: primarch.legion,
      status: primarch.status,
      alignment: primarch.alignment,

      books: books.map(book => ({
        title: book.title,
        url: bookUrl(book.slug)
      }))
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};