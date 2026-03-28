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

  coverImage: "https://example.com/horus-rising.jpg",

  setting: {
    era: "Horus Heresy",
    millennium: "M31",
    year: "M31.005"
  },

  factions: [
    { name: "Imperium", slug: "imperium" },
    { name: "Luna Wolves", slug: "luna-wolves" }
  ],

  characters: ["Garviel Loken", "Erebus"],

  primarchs: [findPrimarch("horus")],

  description: "The beginning of the Horus Heresy."
}
  ]);

  console.log("Books seeded");
  return books;
};