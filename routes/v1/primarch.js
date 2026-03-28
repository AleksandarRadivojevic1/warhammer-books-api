const router = require("express").Router();
const { getPrimarchs, getPrimarchBySlug } = require("../../controllers/primarch");


router.get("/", getPrimarchs);
router.get("/:slug", getPrimarchBySlug);

module.exports = router;