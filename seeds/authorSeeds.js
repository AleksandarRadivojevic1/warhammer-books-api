const Author = require("../models/author");

module.exports = async () => {
  await Author.deleteMany();

  const authors = await Author.insertMany([
    {
      name: "Dan Abnett",
      slug: "dan-abnett"
    },
    {
      name: "Graham McNeill",
      slug: "graham-mcneill"
    }
  ]);

  console.log("Authors seeded");
  return authors;
};