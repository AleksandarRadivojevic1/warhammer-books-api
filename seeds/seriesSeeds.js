const Series = require("../models/series");

module.exports = async () => {
  await Series.deleteMany();

  const series = await Series.insertMany([
    {
      name: "Horus Heresy",
      slug: "horus-heresy",
      era: "Horus Heresy",
      order: 1,
      description:"placeholder description for horus heresy series"
    },
    {
      name: "Eisenhorn",
      slug: "eisenhorn",
      era: "Warhammer 40K",
      order: 2,
      description:"placeholder description for eisenhorn series"

    }
  ]);

  console.log("Series seeded");
  return series;
};