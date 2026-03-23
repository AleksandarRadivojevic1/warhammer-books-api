const Book = require("../models/book");

exports.getBooks = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;

    const total = await Book.countDocuments();

    const books = await Book.find()
      .skip((page - 1) * limit)
      .limit(limit);

    // api format
    const results = books.map(book => ({
      id: book._id,
      title: book.title,
      slug: book.slug,
      url: `/api/v1/books/${book.slug}`,
      series: `/api/v1/series/${book.series}`,
      author: book.author ? `/api/v1/authors/${book.author}` : null,
      coverImage: book.coverImage || null,
      setting: book.setting
    }));

    res.json({
      count: total,
      next: page * limit < total ? `/api/v1/books?page=${page + 1}` : null,
      previous: page > 1 ? `/api/v1/books?page=${page - 1}` : null,
      results
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};