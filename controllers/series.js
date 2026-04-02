const Series = require("../models/series");
const Book = require("../models/book");

const BASE_URL = "/api/v1";

const seriesUrl = (slug) => `${BASE_URL}/series/${slug}`;
const bookUrl = (slug) => `${BASE_URL}/books/${slug}`;

const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Get all series with pagination and optional filtering
exports.getSeries = async (req, res, next) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = 20;
    const filter = {};

    if (req.query.era) {
      filter.era = req.query.era;
    }

    if (req.query.search) {
      filter.name = { $regex: escapeRegex(req.query.search), $options: "i" };
    }

    const [total, series] = await Promise.all([
      Series.countDocuments(filter),
      Series.find(filter)
        .sort({ order: 1 })
        .skip((page - 1) * limit)
        .limit(limit),
    ]);

    const activeFilters = { ...req.query };
    delete activeFilters.page;
    const filterString = new URLSearchParams(activeFilters).toString();
    const paginationBase = filterString
      ? `${BASE_URL}/series?${filterString}&`
      : `${BASE_URL}/series?`;

    res.json({
      count: total,
      next: page * limit < total ? `${paginationBase}page=${page + 1}` : null,
      previous: page > 1 ? `${paginationBase}page=${page - 1}` : null,
      results: series.map((s) => ({
        order: s.order,
        name: s.name,
        slug: s.slug,
        era: s.era,
        url: seriesUrl(s.slug),
      })),
    });

  } catch (err) {
    next(err);
  }
};

// Get series by slug
exports.getSeriesBySlug = async (req, res, next) => {
  try {
    const series = await Series.findOne({ slug: req.params.slug });

    if (!series) {
      return res.status(404).json({ error: "Series not found" });
    }

    const books = await Book.find({ series: series._id })
      .sort({ orderInSeries: 1 })
      .select("title slug orderInSeries");

    res.json({
      name: series.name,
      slug: series.slug,
      era: series.era,
      description: series.description || null,
      books: books.map((book) => ({
        order: book.orderInSeries,
        title: book.title,
        url: bookUrl(book.slug),
      })),
    });

  } catch (err) {
    next(err);
  }
};
