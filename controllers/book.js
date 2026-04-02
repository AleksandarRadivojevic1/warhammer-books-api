const Book = require("../models/book");
const Author = require("../models/author");
const Series = require("../models/series");
const Primarch = require("../models/primarch");

const BASE_URL = "/api/v1";

//URL helpers
const bookUrl = (slug) => `${BASE_URL}/books/${slug}`;
const authorUrl = (slug) => `${BASE_URL}/authors/${slug}`;
const seriesUrl = (slug) => `${BASE_URL}/series/${slug}`;
const primarchUrl = (slug) => `${BASE_URL}/primarchs/${slug}`;

// Formats a populated author into the API shape
const formatAuthor = (author) =>
  author ? { name: author.name, url: authorUrl(author.slug) } : null;

// Formats a populated series into the API shape
const formatSeries = (series) =>
  series ? { name: series.name, url: seriesUrl(series.slug) } : null;

const SLUG_PATTERN = /^[a-z0-9-]+$/;
const VALID_SORT_FIELDS = ["title", "pages", "orderInSeries"];
const VALID_SORT_ORDERS = ["asc", "desc"];

const validateSlug = (slug, field, res) => {
  if (!SLUG_PATTERN.test(slug)) {
    res.status(400).json({ error: `Invalid ${field}: "${slug}"` });
    return false;
  }
  return true;
};

// Escapes special regex characters in a search string
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Get all books with pagination and optional filtering
exports.getBooks = async (req, res, next) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = 10;
    const filter = {};

    // Direct field filters
    if (req.query.era) filter["setting.era"] = req.query.era;
    if (req.query.millennium) filter["setting.millennium"] = req.query.millennium;
    if (req.query.search) {
      filter.title = { $regex: escapeRegex(req.query.search), $options: "i" };
    }

    // Slug-based filters — validate slug, look up _id, filter by it
    if (req.query.series) {
      if (!validateSlug(req.query.series, "series", res)) return;
      const series = await Series.findOne({ slug: req.query.series });
      if (!series) return res.status(404).json({ error: `Series not found: "${req.query.series}"` });
      filter.series = series._id;
    }

    if (req.query.author) {
      if (!validateSlug(req.query.author, "author", res)) return;
      const author = await Author.findOne({ slug: req.query.author });
      if (!author) return res.status(404).json({ error: `Author not found: "${req.query.author}"` });
      filter.author = author._id;
    }

    if (req.query.primarch) {
      if (!validateSlug(req.query.primarch, "primarch", res)) return;
      const primarch = await Primarch.findOne({ slug: req.query.primarch });
      if (!primarch) return res.status(404).json({ error: `Primarch not found: "${req.query.primarch}"` });
      filter.primarchs = primarch._id;
    }

    // Sorting
    const sortField = VALID_SORT_FIELDS.includes(req.query.sort)
      ? req.query.sort
      : "orderInSeries";
    const sortOrder = VALID_SORT_ORDERS.includes(req.query.order)
      ? req.query.order
      : "asc";

    if (req.query.sort && !VALID_SORT_FIELDS.includes(req.query.sort)) {
      return res.status(400).json({
        error: `Invalid sort field. Must be one of: ${VALID_SORT_FIELDS.join(", ")}`,
      });
    }

    if (req.query.order && !VALID_SORT_ORDERS.includes(req.query.order)) {
      return res.status(400).json({
        error: `Invalid order. Must be one of: ${VALID_SORT_ORDERS.join(", ")}`,
      });
    }

    const [total, books] = await Promise.all([
      Book.countDocuments(filter),
      Book.find(filter)
        .populate("author", "name slug")
        .populate("series", "name slug")
        .sort({ [sortField]: sortOrder === "asc" ? 1 : -1 })
        .skip((page - 1) * limit)
        .limit(limit),
    ]);

    // Preserve active filters in pagination links
    const activeFilters = { ...req.query };
    delete activeFilters.page;
    const filterString = new URLSearchParams(activeFilters).toString();
    const paginationBase = filterString
      ? `${BASE_URL}/books?${filterString}&`
      : `${BASE_URL}/books?`;

    const results = books.map((book) => ({
      id: book._id,
      title: book.title,
      slug: book.slug,
      url: bookUrl(book.slug),
      series: formatSeries(book.series),
      author: formatAuthor(book.author),
      pages: book.pages ?? null,
      coverImage: book.coverImage || null,
      setting: book.setting,
      characters: (book.characters ?? []).map(({ name, slug }) => ({ name, slug })),
      factions: (book.factions ?? []).map(({ name, slug }) => ({ name, slug })),
    }));

    res.json({
      count: total,
      next: page * limit < total ? `${paginationBase}page=${page + 1}` : null,
      previous: page > 1 ? `${paginationBase}page=${page - 1}` : null,
      results,
    });

  } catch (err) {
    next(err);
  }
};


// Get related books for a given book slug
exports.getRelatedBooks = async (req, res, next) => {
  try {
    const book = await Book.findOne({ slug: req.params.slug })
      .populate("primarchs", "_id");

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    const LIMIT = 5;

    // Same series, excluding the current book, sorted by position
    const sameSeries = await Book.find({
      series: book.series,
      _id: { $ne: book._id },
    })
      .populate("author", "name slug")
      .populate("series", "name slug")
      .sort({ orderInSeries: 1 })
      .limit(LIMIT);

    // Books sharing at least one primarch, from a different series
    const primarchIds = (book.primarchs ?? []).map((p) => p._id);
    const relatedByPrimarch = primarchIds.length > 0
      ? await Book.find({
          primarchs: { $in: primarchIds },
          series: { $ne: book.series },
          _id: { $ne: book._id },
        })
          .populate("author", "name slug")
          .populate("series", "name slug")
          .sort({ orderInSeries: 1 })
          .limit(LIMIT)
      : [];

    const formatBook = (b) => ({
      title: b.title,
      slug: b.slug,
      url: bookUrl(b.slug),
      series: formatSeries(b.series),
      author: formatAuthor(b.author),
      pages: b.pages ?? null,
      coverImage: b.coverImage || null,
      setting: b.setting,
      characters: (b.characters ?? []).map(({ name, slug }) => ({ name, slug })),
      factions: (b.factions ?? []).map(({ name, slug }) => ({ name, slug })),
    });

    res.json({
      sameSeries: sameSeries.map(formatBook),
      relatedByPrimarch: relatedByPrimarch.map(formatBook),
    });

  } catch (err) {
    next(err);
  }
};

// Get book by slug
exports.getBookBySlug = async (req, res, next) => {
  try {
    const book = await Book.findOne({ slug: req.params.slug })
      .populate("author", "name slug")
      .populate("series", "name slug")
      .populate("primarchs", "name slug");

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.json({
      id: book._id,
      title: book.title,
      slug: book.slug,
      description: book.description,
      series: formatSeries(book.series),
      author: formatAuthor(book.author),
      pages: book.pages,
      coverImage: book.coverImage || null,
      setting: book.setting,
      primarchs: (book.primarchs ?? []).map((p) => ({
        name: p.name,
        url: primarchUrl(p.slug),
      })),
      factions: (book.factions ?? []).map(({ name, slug }) => ({ name, slug })),
      characters: (book.characters ?? []).map(({ name, slug }) => ({ name, slug })),
      createdAt: book.createdAt,
      updatedAt: book.updatedAt,
    });

  } catch (err) {
    next(err);
  }
};