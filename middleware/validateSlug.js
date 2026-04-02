const SLUG_PATTERN = /^[a-z0-9-]+$/;

const validateSlug = (req, res, next) => {
  if (!SLUG_PATTERN.test(req.params.slug)) {
    return res.status(400).json({ error: `Invalid slug: "${req.params.slug}"` });
  }
  next();
};

module.exports = validateSlug;
