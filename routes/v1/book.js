const router = require("express").Router();
const { getBooks, getBookBySlug, getRelatedBooks } = require("../../controllers/book");
const validateSlug = require("../../middleware/validateSlug");

router.get("/", getBooks);
router.get("/:slug/related", validateSlug, getRelatedBooks);
router.get("/:slug", validateSlug, getBookBySlug);

module.exports = router;