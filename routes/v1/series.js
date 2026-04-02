const router = require("express").Router();
const { getSeries, getSeriesBySlug } = require("../../controllers/series");
const validateSlug = require("../../middleware/validateSlug");

router.get("/", getSeries);
router.get("/:slug", validateSlug, getSeriesBySlug);

module.exports = router;