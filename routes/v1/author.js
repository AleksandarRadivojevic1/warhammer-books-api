const router = require("express").Router();

const {getAuthors,getAuthorBySlug} = require("../../controllers/author");

router.get("/", getAuthors);
router.get("/:slug", getAuthorBySlug);    

module.exports = router;