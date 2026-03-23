const Primarch = require("../models/primarch");

module.exports = async () => {
  await Primarch.deleteMany();

  const primarchs = await Primarch.insertMany([
    {
      name: "Horus",
      slug: "horus",
      legion: "Luna Wolves",
      status: "Dead",
      alignment: "Traitor"
    },
    {
      name: "Roboute Guilliman",
      slug: "roboute-guilliman",
      legion: "Ultramarines",
      status: "Alive",
      alignment: "Loyalist"
    }
  ]);

  console.log("Primarchs seeded");
  return primarchs;
};