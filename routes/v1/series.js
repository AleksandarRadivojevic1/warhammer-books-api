const router = require("express").Router();
const { getSeries, getSeriesBySlug } = require("../../controllers/series");


router.get("/", getSeries);
router.get("/:slug", getSeriesBySlug);

module.exports = router;