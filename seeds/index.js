
const mongoose = require("mongoose");

const seedAuthors = require("./authorSeeds");
const seedSeries = require("./seriesSeeds");
const seedPrimarchs = require("./primarchSeeds");
const seedBooks = require("./bookSeeds");

mongoose.connect("mongodb://localhost:27017/warhammer-db")    
  .then(async () => {
    console.log("MongoDB connected");

    try {
      // Order matters
      const authors = await seedAuthors();
      const series = await seedSeries();
      const primarchs = await seedPrimarchs();

      await seedBooks({ authors, series, primarchs });

      console.log("🌱 Seeding complete");
      process.exit();
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  });