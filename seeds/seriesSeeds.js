const Series = require("../models/series");

module.exports = async () => {
  await Series.deleteMany();

  const series = await Series.insertMany([
    {
      name: "The Horus Heresy Novels",
      slug: "the-horus-heresy-novels",
      era: "31st Millennium",
      order: 9,
      description: "The Horus Heresy is a series of novels, anthologies and audiobooks based on the historic events known as the Great Crusade and the Horus Heresy, about 10,000 standard years before the present 41st millennium. The novels are written by different authors, but follow the same storyline - the fall of Warmaster Horus and his campaign of treachery to usurp the Emperor as ruler of the Imperium."
    },
    {
      name: "Eisenhorn",
      slug: "eisenhorn",
      era: "41st Millennium",
      order: 25,
      description: "Eisenhorn is a series of novels and short stories, following the adventures of Inquisitor Gregor Eisenhorn. It originally debuted in 2001 alongside the release of Games Workshop's 54 millimetre model specialty tabletop miniatures wargame, Inquisitor."
    },
    {
      name: "The Siege of Terra",
      slug: "the-siege-of-terra",
      era: "31st Millennium",
      order: 10,
      description: "Following the 54th Horus Heresy novel The Buried Dagger the series was rebranded under the The Horus Heresy: Siege of Terra label. Siege of Terra is the continuation of the story that began with the Horus Heresy series. The Siege of Terra is the finale of the overall Horus Heresy story and is set during the events of the Battle of Terra."
    },
    {
      name: "The Beast Arises",
      slug: "the-beast-arises",
      era: "32nd Millennium",
      order: 11,
      description: "1,500 years have passed since the end of the Horus Heresy, and the Imperium is at peace. The Space Marines keep the Galaxy safe and the High Lords of Terra busy themselves with politicking and infighting. But something has been out there in the darkness, waiting...The Orks have returned, and they are more powerful than ever before. Can the Imperium hope to survive when The Beast arises?"
    },
    {
      name: "Ravenor",
      slug: "ravenor",
      era: "41st Millennium",
      order: 26,
      description: "The storming tale of Inquisitor Gideon Ravenor and his band of lethal operatives conveys the grim far future from the ground level up as they investigate the trafficking of a dangerous substance within the Imperium. With their investigations taking them from highly polluted planets and freakish carnivals to lawless frontier spaceports, their deadly quarry is always one step ahead!"
    },
    {
      name: "Bequin",
      slug: "bequin",
      era: "41st Millennium",
      order: 27,
      description: "The Bequin series, commencing with Pariah, is a planned trilogy of novels by Dan Abnett, which is meant to complete the Inquisitor, after the Eisenhorn and Ravenor series, also by Abnett. The third trilogy focuses on Alizebeth Bequin, a former protegée and operative of Gregor Eisenhorn."
    },
    {
      name: "Gaunt's Ghosts",
      slug: "gaunts-ghosts",
      era: "41st Millennium",
      order: 23,
      description: "The Gaunt's Ghosts (Novel Series) is a Black Library series written or edited by Dan Abnett following the adventures of the Tanith First and Only Imperial Guard Regiment battling to free the Sabbat Worlds system from the forces of Chaos. The series is one the most successful lines of the Black Library."
    },
    {
      name: "Ciaphas Cain",
      slug: "ciaphas-cain",
      era: "41st Millennium",
      order: 22,
      description: "The Ciaphas Cain series are Dark Comedy/Action-Adventure novels written by Sandy Mitchell that follow the life of Imperial Commissar Ciaphas Cain. The series is known for its humor and the way it subverts typical Warhammer 40K tropes, with Cain often being portrayed as a reluctant hero who is more interested in self-preservation than in serving the Imperium."
    },
    {
      name: "Dawn of Fire",
      slug: "dawn-of-fire",
      era: "42nd Millennium",
      order: 30,
      description: "This new series is packed with soaring, epic tales, introducing and tying together narrative threads from boxed sets, campaign books, and codexes. In short, Dawn of Fire combines the storytelling powerhouses of the Citadel studio and Black Library to create a broad, unified narrative that delivers the ongoing story of the 41st Millennium the most exciting, cohesive way ever."
    },
    {
      name: "Chaos Space Marines",
      slug: "chaos-space-marines",
      era: "41st Millennium",
      order: 16,
      description: "The Chaos Space Marines series, often referred to as the Heretic Astartes, focuses on the nine original Space Marine Legions that betrayed the Imperium of Man during the Horus Heresy, as well as subsequent Renegade Chapters. "
    },
    {
      name: "Adepta Sororitas",
      slug: "adepta-sororitas",
      era: "41st Millennium",
      order: 12,
      description: "The Adepta Sororitas (Novel Series) is an unofficial list of Warhammer 40,000 media that focus on characters from the Adepta Sororitas."
    },
    {
      name: "Stormcast Eternals",
      slug: "stormcast-eternals",
      era: "Age of Sigmar",
      order: 6,
      description: "The Stormcast Eternals are demigods clad in gleaming sigmarite armour. Each one is a mighty warrior plucked from their moment of death and Reforged on the Anvil of Apotheosis by the God-King himself, transformed into immortal heroes and sworn to protect the Mortal Realms from the depredations of Chaos."
    },
    {
      name: "Astra Militarum",
      slug: "astra-militarum",
      era: "41st Millennium",
      order: 17,
      description: "The Astra Militarum, also known as the Imperial Guard in colloquial Low Gothic, is the largest coherent fighting force in the galaxy and serves as the Imperium of Man's primary military force and first line of defence from the myriad threats which endanger the existence of the Human species."
    },
    {
      name: "Space Marine Battles",
      slug: "space-marine-battles",
      era: "41st Millennium",
      order: 13,
      description: "The Space Marine Battles series by Black Library focuses on high-action, pivotal conflicts featuring various Space Marine Chapters within the Warhammer 40,000 universe"
    },
    {
      name: "Gotrek & Felix",
      slug: "gotrek-and-felix",
      era: "Old World",
      order: 3,
      description: "Follow the adventures of a Dwarfen Slayer named Gotrek Gurnisson and his human companion, Felix Jaeger. As a slayer Gotrek has sworn to seek an honourable death in combat to atone for an unspoken personal disgrace. Felix, bound to him by a Dwarfen blood-oath sworn after a drinking binge, is tasked with writing and recording his heroic exploits and ultimately his death. Together they have helped rid the Old World of trolls, skaven, daemons, dragons, beastmen, vampires, orcs, and other monsters. Read about their many perilous adventures in the Black Libraries longest-running Warhammer series."
    },
    {
      name: "Warhammer Adventures",
      slug: "warhammer-adventures",
      era: "41st Millennium",
      order: 33,
      description: "Warhammer Adventures is a line of young adult books set in the Warhammer 40,000 universe. Unlike most Warhammer 40,000 material, Warhammer Adventures is specifically aimed at young readers aged 8-12."
    },
    {
      name: "Novella Series 3",
      slug: "novella-series-3",
      era: "Various",
      order: 34,
      description: "The Novella Series 3 is a collection of novellas written by various authors."
    },
    {
      name: "Mephiston",
      slug: "mephiston",
      era: "41st Millennium",
      order: 24,
      description: "Mephiston is a novel series by Darius Hinks focusing on Mephiston of the Blood Angels."
    },
    {
      name: "Space Marine Conquests",
      slug: "space-marine-conquests",
      era: "41st Millennium",
      order: 14,
      description: "The Space Marine Conquest series is the re-launch of the Space Marine Battles series of novels."
    },
    {
      name: "Primarchs",
      slug: "primarchs",
      era: "30th Millennium",
      order: 8,
      description: "The Primarchs is a novel series from Black Library Publishing. Each novel will cover a different Primarch before the coming of the Horus Heresy."
    },
    {
      name: "The End Times",
      slug: "the-end-times",
      era: "Old World",
      order: 4,
      description: "The End Times is a series of five novels and miscellaneous short stories, detailing the End Times and the destruction of the Warhammer world."
    },
    {
      name: "Time of Legends",
      slug: "time-of-legends",
      era: "Old World",
      order: 1,
      description: "The Time of Legends prequel novels all recount legendary events from the history of the world of Mallus. The canonicity of the events depicted in these books is always questionable and often conflicts with prior established lore."
    },
    {
      name: "Necromunda",
      slug: "necromunda",
      era: "41st Millennium",
      order: 21,
      description: "The Necromunda series of novels all take place on the infamous Hive World of Necromunda. They were published by Black Library from 2005 to 2007 to try to relaunch the setting, and were re-published from 2011 to 2012 in three Omnibus editions along with earlier short stories (Omnibus 1 & 2) and the Kal Jerico comics (The Complete Kal Jerico) respectively."
    },
    {
      name: "Blackstone Fortress",
      slug: "blackstone-fortress",
      era: "42nd Millennium",
      order: 29,
      description: "What exactly is UR-025? When the ancient robot ventures into the Blackstone Fortress alongside a party from the Adeptus Mechanicus, secrets come to light that could spell doom…"
    },
    {
      name: "The Realmgate Wars",
      slug: "the-realmgate-wars",
      era: "Age of Sigmar",
      order: 5,
      description: "Discover new heroes and villains and see the realms of Metal and Life for the first time as the Stormcast Eternals battle the forces of Chaos across the Mortal Realms."
    },
    {
      name: "Legends of the Dark Millennium",
      slug: "legends-of-the-dark-millennium",
      era: "41st Millennium",
      order: 20,
      description: "The rising star of the Tau Empire faces his first true challenge as he leads the Fire Caste against an overwhelming force of orks in an environment as deadly as the enemy."
    },
    {
      name: "Path of the Eldar",
      slug: "path-of-the-eldar",
      era: "41st Millennium",
      order: 18,
      description: "When the eldar artist Korlandril feels the call to war, he walks the Path of the Warrior and joins the Striking Scorpions. As his craftworld is drawn into war with the Imperium, Korlandril finds that once he has begun walking that path, it may not be easy to leave it…"
    },
    {
      name: "Path of the Dark Eldar",
      slug: "path-of-the-dark-eldar",
      era: "41st Millennium",
      order: 19,
      description: "In the hidden city of the dark eldar, a crisis is coming. An ambitious archon and a twisted haemonculus unite to challenge the city's rulers, and Commoragh will burn in their wake."
    },
    {
      name: "Legends of the Age of Sigmar",
      slug: "legends-of-the-age-of-sigmar",
      era: "Age of Sigmar",
      order: 7,
      description: "Across the Mortal Realms, the Fyreslayers battle the forces of Chaos as an ancient prophecy comes to pass and destiny threatens to overwhelm them."
    },
    {
      name: "Space Marine Legends",
      slug: "space-marine-legends",
      era: "41st Millennium",
      order: 15,
      description: "Space Marine Legends is a novel series by Black Library Publishing. It focuses on famous Space Marines of the 41st Millennium"
    },
    {
      name: "The Horusian Wars",
      slug: "the-horusian-wars",
      era: "41st Millennium",
      order: 28,
      description: "Horusian Wars is a novel and short series by John French. The series focuses on the factional conflicts within the Inquisition."
    },
    {
      name: "Night Lords",
      slug: "night-lords",
      era: "41st Millennium",
      order: 35,
      description: "The Night Lords trilogy by Aaron Dembski-Bowden follows the warband of the Night Lords Chaos Space Marines — former servants of the Emperor turned to darkness. Led by the prophet Talos, they hunt across the galaxy, feared for their terror tactics and merciless cruelty."
    },
    {
      name: "Black Legion",
      slug: "black-legion",
      era: "41st Millennium",
      order: 36,
      description: "The Black Legion series by Aaron Dembski-Bowden chronicles the rise of Abaddon the Despoiler and the forging of the Black Legion — the greatest of all the Chaos Space Marine warbands — from the ruins of the Sons of Horus after the Horus Heresy."
    },
    {
      name: "Ahriman",
      slug: "ahriman",
      era: "41st Millennium",
      order: 37,
      description: "The Ahriman trilogy by John French follows Ahriman, Chief Librarian of the Thousand Sons, as he seeks to undo the Rubric — the catastrophic spell that turned most of his Legion into dust-filled automatons — and grapples with whether his sorcerous power is a gift or a curse."
    },
    {
      name: "Word Bearers",
      slug: "word-bearers",
      era: "41st Millennium",
      order: 38,
      description: "The Word Bearers trilogy by Anthony Reynolds follows the Dark Apostle Jarulek and his host as they prosecute the will of the Dark Gods across the galaxy, bringing the word of Chaos to those who would resist and death to all who stand in their way."
    },
    {
      name: "Fabius Bile",
      slug: "fabius-bile",
      era: "41st Millennium",
      order: 39,
      description: "The Fabius Bile trilogy by Josh Reynolds follows the infamous Clonelord — former Chief Apothecary of the Emperor's Children — as he pursues his obsessive quest to create the perfect human being, conducting horrific experiments across the galaxy in defiance of gods, men and his own monstrous creations."
    },
    {
      name: "Legend of Sigmar",
      slug: "legend-of-sigmar",
      era: "Old World",
      order: 40,
      description: "The Legend of Sigmar trilogy by Graham McNeill tells the epic story of Sigmar Heldenhammer — the man who would become the God-King of the Empire. From his rise among the tribes of men to his legendary battles against Chaos and his ultimate ascension to godhood."
    },
    {
      name: "The Sundering",
      slug: "the-sundering",
      era: "Old World",
      order: 41,
      description: "The Sundering trilogy by Gav Thorpe tells the tale of the ancient schism that split the elven race in two — the bitter war between Malekith, the Witch King of Naggaroth, and the high elves of Ulthuan — told from both sides of the conflict."
    },
    {
      name: "Rise of Nagash",
      slug: "rise-of-nagash",
      era: "Old World",
      order: 42,
      description: "The Rise of Nagash trilogy by Mike Lee chronicles the origins of the Great Necromancer — from his birth as a Nehekharan prince to his monstrous transformation into the world's most powerful undead sorcerer and his relentless war to conquer the known world."
    },
    {
      name: "Dark Imperium",
      slug: "dark-imperium",
      era: "42nd Millennium",
      order: 43,
      description: "Guy Haley's Dark Imperium trilogy follows the resurrected Primarch Roboute Guilliman as his Indomitus Crusade confronts the Death Guard of Mortarion in the Plague Wars of Ultramar — a generational reckoning between loyal and traitor brothers a hundred years after the Great Rift."
    },
    {
      name: "Watchers of the Throne",
      slug: "watchers-of-the-throne",
      era: "41st Millennium",
      order: 44,
      description: "Chris Wraight's Watchers of the Throne duology takes the reader inside the Imperial Palace in the chaos of the post-Cadia era, following a Custodian and a Sister of Silence as the Emperor's personal legion steps out of the shadows for the first time in millennia."
    },
    {
      name: "Vaults of Terra",
      slug: "vaults-of-terra",
      era: "41st Millennium",
      order: 45,
      description: "Chris Wraight's Vaults of Terra trilogy follows Inquisitor Erasmus Crowl through the sacred rot of the Throneworld, tracing a heretical conspiracy from the High Lords' halls into the hollow mountain at Terra's heart and beyond."
    },
    {
      name: "Ultramarines",
      slug: "ultramarines",
      era: "41st Millennium",
      order: 46,
      description: "Graham McNeill's original Ultramarines series — sometimes known as The Chronicles of Uriel Ventris — follows Captain Uriel Ventris and the Fourth Company through the defining campaigns of their career: from Tyranid swarms and Necron awakenings to exile in the Eye of Terror and the return of the Iron Warrior Honsou."
    },
    {
      name: "Grey Knights",
      slug: "grey-knights",
      era: "41st Millennium",
      order: 47,
      description: "Ben Counter's Grey Knights trilogy follows Justicar Alaric of the Chamber Militant of the Ordo Malleus as he leads his squad into the most horrific corners of the galaxy, hunting daemons and the servants of Chaos with the purest warriors the Imperium has ever produced."
    },
    {
      name: "Blood Angels",
      slug: "blood-angels",
      era: "41st Millennium",
      order: 48,
      description: "James Swallow's Blood Angels series follows Brother Rafen through the Deus Encarmine / Deus Sanguinius arc and the Red Fury / Black Tide sequel novels — a saga of heresy, the Red Thirst and the bond between brothers of the sons of Sanguinius."
    },
    {
      name: "Space Wolf",
      slug: "space-wolf",
      era: "41st Millennium",
      order: 49,
      description: "William King's original Space Wolf series (continued by Lee Lightner) follows Ragnar Blackmane from young Fenrisian warrior to celebrated hero of the Rout — a saga of wolf-blood, honour and the relentless pursuit of ancient enemies across the galaxy."
    },
    {
      name: "Iron Warriors",
      slug: "iron-warriors",
      era: "41st Millennium",
      order: 50,
      description: "Graham McNeill's Iron Warriors books — including the novel Storm of Iron and the Iron Warriors Omnibus — chronicle the sieges, raids and grudges of Warsmith Honsou's warband, the greatest post-Heresy portrait of Perturabo's embittered sons."
    },
    {
      name: "Soul Drinkers",
      slug: "soul-drinkers",
      era: "41st Millennium",
      order: 51,
      description: "Ben Counter's Soul Drinkers hexalogy follows Chapter Master Sarpedon as his proud Imperial Fists successor Chapter is branded Excommunicate Traitoris and slides toward damnation and redemption in equal measure — one of Black Library's longest character arcs."
    },
    {
      name: "Deathwatch",
      slug: "deathwatch",
      era: "41st Millennium",
      order: 52,
      description: "The Deathwatch series — led by Steve Parker and continued by various authors — follows kill-teams of the Chamber Militant of the Ordo Xenos through the Jericho Reach and beyond, hunting the alien threats no single Space Marine Chapter could face alone."
    },
    {
      name: "Twice-Dead King",
      slug: "twice-dead-king",
      era: "41st Millennium",
      order: 53,
      description: "Nate Crowley's Twice-Dead King duology (Ruin, Reign) follows the exiled necron prince Oltyx as he rises from the broken edges of a crumbling dynasty to claim a throne — a rare and sympathetic portrait of the necron mindset from inside the metal."
    },
    {
      name: "The Infinite and the Divine",
      slug: "the-infinite-and-the-divine",
      era: "Pre-Imperium",
      order: 54,
      description: "Robert Rath's standalone novel follows the multi-million-year rivalry between the necron nobles Trazyn the Infinite and Orikan the Diviner — a darkly comic, deeply strange look at immortal petty spite across the rise and fall of civilisations."
    },
    {
      name: "Gotrek Gurnisson",
      slug: "gotrek-aos",
      era: "Age of Sigmar",
      order: 55,
      description: "The Age of Sigmar continuation of the Gotrek saga — beginning with Realmslayer by David Guymer and continued by Darius Hinks and Richard Strachan — follows the last Slayer, hurled forward into the Mortal Realms, as he searches for Felix Jaeger, for his doom, and for the meaning of a world he barely understands."
    },
    {
      name: "Hallowed Knights",
      slug: "hallowed-knights",
      era: "Age of Sigmar",
      order: 56,
      description: "Josh Reynolds's Hallowed Knights novels follow Lord-Castellant Gardus Steel Soul and his Stormcast warrior chamber through the worst of Nurgle's and Nagash's domains — Plague Garden and Black Pyramid, two tales of the most indomitable warriors Sigmar ever forged."
    },
    {
      name: "Eight Lamentations",
      slug: "eight-lamentations",
      era: "Age of Sigmar",
      order: 57,
      description: "An Age of Sigmar meta-series launched by Josh Reynolds's Spear of Shadows, following the hunt for eight cursed weapons scattered across the Mortal Realms by Chaos champions and hunted by heroes of Order."
    },
    {
      name: "The Black Plague",
      slug: "the-black-plague",
      era: "Old World",
      order: 58,
      description: "C.L. Werner's Black Plague trilogy (Dead Winter, Blighted Empire, Wolf of Sigmar) chronicles the Skaven plague that almost destroyed the Empire in the twelfth century — a Time of Legends epic of civic collapse, ratmen schemes and the rise of Mandred Skavenslayer."
    },
    {
      name: "War of Vengeance",
      slug: "war-of-vengeance",
      era: "Old World",
      order: 59,
      description: "A Time of Legends trilogy (Nick Kyme / Chris Wraight / C.L. Werner) chronicling the cataclysmic war between the Dwarfs and the High Elves — the grudge that ended the golden age of the Elder Races and shaped the Old World forever after."
    },
    {
      name: "Kharn",
      slug: "kharn",
      era: "41st Millennium",
      order: 60,
      description: "Anthony Reynolds's Kharn duology (Eater of Worlds, The Red Path) follows the Betrayer himself — chosen of Khorne, living incarnation of rage — as he leads what remains of the Eighth Company of the World Eaters through the galaxy's most violent warzones."
    },
    {
      name: "Macharian Crusade",
      slug: "macharian-crusade",
      era: "41st Millennium",
      order: 61,
      description: "William King's Macharian Crusade trilogy (Angel of Fire, Fist of Demetrius, Fall of Macharius) chronicles the greatest Imperial crusade since the Emperor's own time, following the Lord Solar and the troopers who marched with him across a thousand reclaimed worlds."
    },
  ]);

  console.log("Series seeded");
  return series;
};