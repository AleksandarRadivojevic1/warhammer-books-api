const Series = require("../models/series");
const Book = require("../models/book");

const BASE_URL = "/api/v1";

const seriesUrl = (slug) => `${BASE_URL}/series/${slug}`;
const bookUrl   = (slug) => `${BASE_URL}/books/${slug}`;


// Get all series
exports.getSeries = async (req, res) => {
  try {
    const series = await Series.find().sort({ order: 1 });

    const results = series.map(s => ({
      name: s.name,
      slug: s.slug,
      era: s.era,
      url: seriesUrl(s.slug)
    }));

    res.json({
      count: results.length,
      results
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get series by slug
exports.getSeriesBySlug = async (req, res) => {
  try {
    const series = await Series.findOne({ slug: req.params.slug });

    if (!series) {
      return res.status(404).json({ error: "Series not found" });
    }

    // Get books in correct order
    const books = await Book.find({ series: series._id })
      .sort({ orderInSeries: 1 })
      .select("title slug orderInSeries");

    res.json({
      name: series.name,
      slug: series.slug,
      era: series.era,
      description: series.description || null,

      books: books.map(book => ({
        order: book.orderInSeries,
        title: book.title,
        url: bookUrl(book.slug)
      }))
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};