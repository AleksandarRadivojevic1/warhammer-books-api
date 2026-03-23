const Book = require("../models/book");

module.exports = async ({ authors, series, primarchs }) => {
  await Book.deleteMany();

  // Helper functions
  const findAuthor = (slug) => authors.find(a => a.slug === slug)._id;
  const findSeries = (slug) => series.find(s => s.slug === slug)._id;
  const findPrimarch = (slug) => primarchs.find(p => p.slug === slug)._id;

  const books = await Book.insertMany([
    {
      title: "Horus Rising",
      slug: "horus-rising",
      series: findSeries("horus-heresy"),
      orderInSeries: 1,
      author: findAuthor("dan-abnett"),
      pages: 416,
      setting: {
        era: "Horus Heresy",
        millennium: "M31"
      },
      primarchs: [findPrimarch("horus")],
      description: "The beginning of the Horus Heresy."
    },
    {
      title: "False Gods",
      slug: "false-gods",
      series: findSeries("horus-heresy"),
      orderInSeries: 2,
      author: findAuthor("graham-mcneill"),
      setting: {
        era: "Horus Heresy",
        millennium: "M31"
      },
      primarchs: [findPrimarch("horus")]
    }
  ]);

  console.log("Books seeded");
  return books;
};