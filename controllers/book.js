const Book = require("../models/book");
const Author = require("../models/author");
const Series = require("../models/series");
const Primarch = require("../models/primarch");

const BASE_URL = "/api/v1";

//URL helpers
const bookUrl     = (slug)  => `${BASE_URL}/books/${slug}`;
const authorUrl   = (slug)  => `${BASE_URL}/authors/${slug}`;
const seriesUrl   = (slug)  => `${BASE_URL}/series/${slug}`;
const primarchUrl = (slug)  => `${BASE_URL}/primarchs/${slug}`;

// Formats a populated author into the API shape
const formatAuthor = (author) =>
  author ? { name: author.name, url: authorUrl(author.slug) } : null;

// Formats a populated series into the API shape
const formatSeries = (series) =>
  series ? { name: series.name, url: seriesUrl(series.slug) } : null;


// Get all books with pagination
exports.getBooks = async (req, res) => {
  try {
    const page  = Math.max(1, parseInt(req.query.page) || 1);
    const limit = 10;

    const [total, books] = await Promise.all([
      Book.countDocuments(),
      Book.find()
        .populate("author", "name slug")  // populate so URLs use slugs
        .populate("series", "name slug")
        .skip((page - 1) * limit)
        .limit(limit),
    ]);

    const results = books.map((book) => ({
      id:         book._id,
      title:      book.title,
      slug:       book.slug,
      url:        bookUrl(book.slug),
      series:     formatSeries(book.series),
      author:     formatAuthor(book.author),
      coverImage: book.coverImage || null,
      setting:    book.setting,
    }));

    res.json({
      count:    total,
      next:     page * limit < total ? `${BASE_URL}/books?page=${page + 1}` : null,
      previous: page > 1             ? `${BASE_URL}/books?page=${page - 1}` : null,
      results,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Get book by slug
exports.getBookBySlug = async (req, res) => {
  try {
    const book = await Book.findOne({ slug: req.params.slug })
      .populate("author",    "name slug")
      .populate("series",    "name slug")
      .populate("primarchs", "name slug");

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.json({
      id:          book._id,
      title:       book.title,
      slug:        book.slug,
      description: book.description,
      series:      formatSeries(book.series), 
      author:      formatAuthor(book.author),
      pages:       book.pages,
      coverImage:  book.coverImage || null,
      setting:     book.setting,
      primarchs:   (book.primarchs ?? []).map((p) => ({
        name: p.name,
        url:  primarchUrl(p.slug),
      })),
      createdAt:   book.createdAt,
      updatedAt:   book.updatedAt,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};