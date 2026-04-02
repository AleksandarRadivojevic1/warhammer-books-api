const Author = require("../models/author");
const Book = require("../models/book");

const BASE_URL = "/api/v1";

const authorUrl = (slug) => `${BASE_URL}/authors/${slug}`;
const bookUrl = (slug) => `${BASE_URL}/books/${slug}`;

const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Get all authors with pagination and optional search
exports.getAuthors = async (req, res, next) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = 20;
    const filter = {};

    if (req.query.search) {
      filter.name = { $regex: escapeRegex(req.query.search), $options: "i" };
    }

    const [total, authors] = await Promise.all([
      Author.countDocuments(filter),
      Author.find(filter)
        .sort({ name: 1 })
        .skip((page - 1) * limit)
        .limit(limit),
    ]);

    const activeFilters = { ...req.query };
    delete activeFilters.page;
    const filterString = new URLSearchParams(activeFilters).toString();
    const paginationBase = filterString
      ? `${BASE_URL}/authors?${filterString}&`
      : `${BASE_URL}/authors?`;

    res.json({
      count: total,
      next: page * limit < total ? `${paginationBase}page=${page + 1}` : null,
      previous: page > 1 ? `${paginationBase}page=${page - 1}` : null,
      results: authors.map((author) => ({
        name: author.name,
        slug: author.slug,
        url: authorUrl(author.slug),
        bio: author.bio,
      })),
    });

  } catch (err) {
    next(err);
  }
};


// Get author by slug
exports.getAuthorBySlug = async (req, res, next) => {
  try {
    const author = await Author.findOne({ slug: req.params.slug });

    if (!author) {
      return res.status(404).json({ error: "Author not found" });
    }

    const books = await Book.find({ author: author._id })
      .select("title slug orderInSeries series")
      .populate("series", "name slug order");

    books.sort((a, b) => {
      const seriesOrder = (a.series?.order ?? 0) - (b.series?.order ?? 0);
      if (seriesOrder !== 0) return seriesOrder;
      return (a.orderInSeries ?? 0) - (b.orderInSeries ?? 0);
    });

    res.json({
      name: author.name,
      slug: author.slug,
      bio: author.bio,
      books: books.map((book) => ({
        title: book.title,
        url: bookUrl(book.slug),
      })),
    });

  } catch (err) {
    next(err);
  }
};
