const Primarch = require("../models/primarch");
const Book = require("../models/book");

const BASE_URL = "/api/v1";

const primarchUrl = (slug) => `${BASE_URL}/primarchs/${slug}`;
const bookUrl = (slug) => `${BASE_URL}/books/${slug}`;

const VALID_ALIGNMENTS = ["Loyalist", "Traitor"];
const VALID_STATUSES = ["Alive", "Dead", "Missing", "Unknown"];

// Get all primarchs with pagination and optional filtering
exports.getPrimarchs = async (req, res, next) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = 10;
    const filter = {};

    if (req.query.alignment) {
      if (!VALID_ALIGNMENTS.includes(req.query.alignment)) {
        return res.status(400).json({
          error: `Invalid alignment. Must be one of: ${VALID_ALIGNMENTS.join(", ")}`,
        });
      }
      filter.alignment = req.query.alignment;
    }

    if (req.query.status) {
      if (!VALID_STATUSES.includes(req.query.status)) {
        return res.status(400).json({
          error: `Invalid status. Must be one of: ${VALID_STATUSES.join(", ")}`,
        });
      }
      filter.status = req.query.status;
    }

    const [total, primarchs] = await Promise.all([
      Primarch.countDocuments(filter),
      Primarch.find(filter)
        .sort({ legionNumber: 1 })
        .skip((page - 1) * limit)
        .limit(limit),
    ]);

    const activeFilters = { ...req.query };
    delete activeFilters.page;
    const filterString = new URLSearchParams(activeFilters).toString();
    const paginationBase = filterString
      ? `${BASE_URL}/primarchs?${filterString}&`
      : `${BASE_URL}/primarchs?`;

    res.json({
      count: total,
      next: page * limit < total ? `${paginationBase}page=${page + 1}` : null,
      previous: page > 1 ? `${paginationBase}page=${page - 1}` : null,
      results: primarchs.map((p) => ({
        name: p.name,
        slug: p.slug,
        legionNumber: p.legionNumber,
        legion: p.legion,
        status: p.status,
        fate: p.fate,
        alignment: p.alignment,
        url: primarchUrl(p.slug),
      })),
    });

  } catch (err) {
    next(err);
  }
};

// Get primarch by slug
exports.getPrimarchBySlug = async (req, res, next) => {
  try {
    const primarch = await Primarch.findOne({ slug: req.params.slug });

    if (!primarch) {
      return res.status(404).json({ error: "Primarch not found" });
    }

    const books = await Book.find({ primarchs: primarch._id })
      .select("title slug orderInSeries series")
      .populate("series", "order");

    books.sort((a, b) => {
      const seriesOrder = (a.series?.order ?? 0) - (b.series?.order ?? 0);
      if (seriesOrder !== 0) return seriesOrder;
      return (a.orderInSeries ?? 0) - (b.orderInSeries ?? 0);
    });

    res.json({
      name: primarch.name,
      slug: primarch.slug,
      legion: primarch.legion,
      legionNumber: primarch.legionNumber,
      status: primarch.status,
      fate: primarch.fate,
      alignment: primarch.alignment,
      books: books.map((book) => ({
        title: book.title,
        url: bookUrl(book.slug),
      })),
    });

  } catch (err) {
    next(err);
  }
};
