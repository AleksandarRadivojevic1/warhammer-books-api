const Series = require("../models/series");

module.exports = async () => {
  await Series.deleteMany();

  const series = await Series.insertMany([
    {
      name: "Horus Heresy",
      slug: "horus-heresy",
      era: "Horus Heresy",
      order: 1
    },
    {
      name: "Eisenhorn",
      slug: "eisenhorn",
      era: "Warhammer 40K",
      order: 2
    }
  ]);

  console.log("Series seeded");
  return series;
};