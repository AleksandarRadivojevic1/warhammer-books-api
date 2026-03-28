const router = require("express").Router();
const { getBooks,getBookBySlug } = require("../../controllers/book");


router.get("/", getBooks);
router.get("/:slug", getBookBySlug);

module.exports = router;