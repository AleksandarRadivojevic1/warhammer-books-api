const router = require("express").Router();
const { getPrimarchs, getPrimarchBySlug } = require("../../controllers/primarch");
const validateSlug = require("../../middleware/validateSlug");

router.get("/", getPrimarchs);
router.get("/:slug", validateSlug, getPrimarchBySlug);

module.exports = router;