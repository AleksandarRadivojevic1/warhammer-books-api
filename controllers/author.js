const Author = require("../models/author");
const Book = require("../models/book");

const BASE_URL = "/api/v1";

const authorUrl = (slug) => `${BASE_URL}/authors/${slug}`;
const bookUrl = (slug) => `${BASE_URL}/books/${slug}`;


// Get all authors
exports.getAuthors = async (req, res, next) => {
  try {
    const authors = await Author.find();

    const results = authors.map(author => ({
      name: author.name,
      slug: author.slug,
      url: authorUrl(author.slug),
      bio: author.bio
    }));

    res.json({
      count: results.length,
      results
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

    // find books by this author
    const books = await Book.find({ author: author._id })
      .select("title slug");

    res.json({
      name: author.name,
      slug: author.slug,
      bio: author.bio,

      books: books.map(book => ({
        title: book.title,
        url: bookUrl(book.slug)
      }))
    });

  } catch (err) {
    next(err);
  }
};