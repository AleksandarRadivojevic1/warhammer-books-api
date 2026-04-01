const Primarch = require("../models/primarch");

module.exports = async () => {
  await Primarch.deleteMany();

  const primarchs = await Primarch.insertMany([
    {
      name: "Horus Lupercal",
      slug: "horus-lupercal",
      legionNumber: 16,
      legion: "Luna Wolves / Sons of Horus",
      status: "Dead",
      fate: "Arch-Traitor, Champion of Chaos",
      alignment: "Traitor"
    },
    {
      name: "Roboute Guilliman",
      slug: "roboute-guilliman",
      legionNumber: 13,
      legion: "Ultramarines",
      status: "Alive",
      fate: "Active in Imperium Sanctus",
      alignment: "Loyalist"
    },
    {
      name: "Leman Russ",
      slug: "leman-russ",
      legionNumber: 6,
      legion: "Space Wolves",
      status: "Alive",
      fate: "Disappeared in the Eye of Terror",
      alignment: "Loyalist"
    }
    , {
      name: "Lion El'Jonson",
      slug: "lion-el-jonson",
      legionNumber: 1,
      legion: "Dark Angels",
      status: "Alive",
      fate: "Active in Imperium Nihilus",
      alignment: "Loyalist"
    }
    , {
      name: "Fulgrim",
      slug: "fulgrim",
      legionNumber: 3,
      legion: "Emperor's Children",
      status: "Alive",
      fate: "Daemon Prince of Slaanesh",
      alignment: "Traitor"
    },
    {
      name: "Perturabo",
      slug: "perturabo",
      legionNumber: 4,
      legion: "Iron Warriors",
      status: "Alive",
      fate: "Daemon Prince of Chaos Undivided",
      alignment: "Traitor"
    },
    {
      name: "Jaghatai Khan",
      slug: "jaghatai-khan",
      legionNumber: 5,
      legion: "White Scars",
      status: "Alive",
      fate: "Disappeared in the Webway",
      alignment: "Loyalist"
    },
    {
      name: "Rogal Dorn",
      slug: "rogal-dorn",
      legionNumber: 7,
      legion: "Imperial Fists",
      status: "Dead",
      fate: "Corpse mostly missing",
      alignment: "Loyalist"
    },
    {
      name: "Konrad Curze",
      slug: "konrad-curze",
      legionNumber: 8,
      legion: "Night Lords",
      status: "Dead",
      fate: "Executed, some scholars believe willingly",
      alignment: "Traitor"
    },
    {
      name: "Sanguinius",
      slug: "sanguinius",
      legionNumber: 9,
      legion: "Blood Angels",
      status: "Dead",
      fate: "Killed by Horus during Siege of Terra",
      alignment: "Loyalist"
    },
    {
      name: "Ferrus Manus",
      slug: "ferrus-manus",
      legionNumber: 10,
      legion: "Iron Hands",
      status: "Dead",
      fate: "Decapitated by Fulgrim",
      alignment: "Loyalist"
    },
    {
      name: "Angron",
      slug: "angron",
      legionNumber: 12,
      legion: "World Eaters",
      status: "Alive",
      fate: "Daemon Prince of Khorne",
      alignment: "Traitor"
    },
    {
      name: "Mortarion",
      slug: "mortarion",
      legionNumber: 14,
      legion: "Death Guard",
      status: "Alive",
      fate: "Daemon Prince of Nurgle",
      alignment: "Traitor"
    },
    {
      name: "Magnus the Red",
      slug: "magnus-the-red",
      legionNumber: 15,
      legion: "Thousand Sons",
      status: "Alive",
      fate: "Daemon Prince of Tzeentch",
      alignment: "Traitor"
    },
    {
      name: "Lorgar Aurelian",
      slug: "lorgar-aurelian",
      legionNumber: 17,
      legion: "Word Bearers",
      status: "Alive",
      fate: "Daemon Prince of Chaos Undivided",
      alignment: "Traitor"
    },
    {
      name: "Vulkan",
      slug: "vulkan",
      legionNumber: 18,
      legion: "Salamanders",
      status: "Missing",
      fate: "Perpetually reincarnating",
      alignment: "Loyalist"
    },
    {
      name: "Corvus Corax",
      slug: "corvus-corax",
      legionNumber: 19,
      legion: "Raven Guard",
      status: "Alive",
      fate: "Disappeared in the Eye of Terror",
      alignment: "Loyalist"
    },
    {
      name: "Alpharius",
      slug: "alpharius",
      legionNumber: 20,
      legion: "Alpha Legion",
      status: "Dead",
      fate: "Killed by Rogal Dorn",
      alignment: "Traitor"
    },
    {
      name: "Omegon",
      slug: "omegon",
      legionNumber: 20,
      legion: "Alpha Legion",
      status: "Unknown",
      fate: "Unknown",
      alignment: "Traitor"
    }
  ]);

  console.log("Primarchs seeded");
  return primarchs;
}; 