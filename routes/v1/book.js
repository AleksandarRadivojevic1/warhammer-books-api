const router = require("express").Router();
const { getBooks, getBookBySlug, getRelatedBooks } = require("../../controllers/book");

router.get("/", getBooks);
router.get("/:slug/related", getRelatedBooks);
router.get("/:slug", getBookBySlug);

module.exports = router;