
const mongoose = require("mongoose");

const seedAuthors = require("./authorSeeds");
const seedSeries = require("./seriesSeeds");
const seedPrimarchs = require("./primarchSeeds");
const seedBooks = require("./bookSeeds");

mongoose.connect("mongodb://localhost:27017/warhammer-db")    
  .then(async () => {
    console.log("MongoDB connected");

    try {
      //Order is important here because books reference authors, series, and primarchs
      const authors = await seedAuthors();
      const series = await seedSeries();
      const primarchs = await seedPrimarchs();

      await seedBooks({ authors, series, primarchs });


      console.log("Seeding complete");
    } catch (err) {
      console.error(err);
    }
    mongoose.connection.close();
  });