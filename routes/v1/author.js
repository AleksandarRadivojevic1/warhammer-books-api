const router = require("express").Router();
const {getAuthors,getAuthorBySlug} = require("../../controllers/author");
const validateSlug = require("../../middleware/validateSlug");

router.get("/", getAuthors);
router.get("/:slug", validateSlug, getAuthorBySlug);    

module.exports = router;