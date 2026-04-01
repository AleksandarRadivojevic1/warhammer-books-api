const Author = require("../models/author");

//possible upgrades later  
// nationality: "British", born: "1965-10-12",image: "https://..."




module.exports = async () => {
  await Author.deleteMany();

  const authors = await Author.insertMany([
    {
      name: "Dan Abnett",
      slug: "dan-abnett",
      bio: "Daniel P. Abnett (born 12 October 1965) is an English comic book writer and novelist. He has been a frequent collaborator with fellow writer Andy Lanning, and has worked on books for both Marvel Comics, and their UK imprint, Marvel UK, since the 1990s, and also 2000 AD. He has also contributed to DC Comics titles, and his Warhammer Fantasy and Warhammer 40,000 novels and graphic novels for Games Workshop's Black Library now run to several dozen titles and have sold over two million copies. In 2009 he released his first original fiction novels through Angry Robot books."
    },
    {
      name: "David Annandale",
      slug: "david-annandale",
      bio: "David Annandale (born 1967) is a Canadian speculative fiction author. He received a BA (1990) and an MA (1992) from the University of Manitoba,and took a PhD from the University of Alberta; he currently teaches at the University of Manitoba. Annandale is a regular contributor to The Skiffy and Fanty Show podcast as 'The Kaiju Whisperer'. His contributions to that podcast have led to two Hugo nominations for the Hugo Award for Best Fancast, once in 2014 and later in 2021. He is predominantly known for his numerous fiction contributions to various Warhammer 40,000 series."
    },
    {
      name: "Andy Chambers",
      slug: "andy-chambers",
      bio: "Born on the 20th October 1966, Andy Chambers started writing his own rules for fantasy battle games at a very young age, inventing rules and gaming tactics for Airfix WWII models. A lot of his early inspiration came from the SELG Middle Earth rules system, which also gave him a life-long habit of playing the forces of evil as Orcs and Goblins."
    },
    {
      name: "Mark Clapham",
      slug: "mark-clapham",
      bio: "Mark Clapham (born 1976) is a British author, best known for writing fiction and reference books for television series, in particular relating to Doctor Who (and its spin-offs) and Warhammer 40,000."
    },
    {
      name: "Andy Clark",
      slug: "andy-clark",
      bio: "Andy Clark has written the Warhammer 40,000 novel 'Kingsblade' and short stories 'Whiteout' and 'Becoming', along with the Age of Sigmar short story 'Gorechosen', and the Warhammer Quest Silver Tower novella 'Labyrinth of the Lost'. Andy works as a background writer for Games Workshop, crafting the worlds of Warhammer Age of Sigmar and Warhammer 40,000. He lives in Nottingham, UK."
    },
    {
      name: "Ben Counter",
      slug: "ben-counter",
      bio: "Ben Counter (1979) is an English fantasy writer, predominantly known for his numerous fiction contributions to various Warhammer 40,000 series. He is also the writer for the 'Out of Place' podcast, a work of serialized fiction with over two dozen episodes"
    },
    {
      name: "Aaron Dembski-Bowden",
      slug: "aaron-dembski-bowden",
      bio: "Dwelling in the green and rainy wilds of rural Northern Ireland, Aaron Dembski-Bowden is a New York Times-bestselling novelist hiding out from civilisation. His contributions to the Horus Heresy series are immensely popular, as is his Night Lords Series and his tales of Abaddon the Despoiler and the Black Legion - though he doesn't always write about the bad guys. His hobbies revolve around reading anything within reach, looking for ways to make his gaming table cooler, and helping people spell his surname."
    },
    {
      name: "Chris Dows",
      slug: "chris-dows",
      bio: "Chris Dows is a writer and educational advisor with over twenty years' experience in comic books, prose and non-fiction. His works for Black Library include the Warhammer 40,000 short stories 'In the Shadow of the Emperor', 'The Mouth of Chaos', 'Monolith' and 'Glory from Chaos' and the novel 'The Red Path'. He lives in Grimsby with his wife and two children."
    },
    {
      name: "C Z Dunn",
      slug: "c-z-dunn",
      bio: "Domiciled in the East Midlands, C Z Dunn is the author of the Space Marine Battles novel 'Pandorax', Dark Angels novel 'Eye of Ezekiel', the novellas 'Crimson Dawn' and 'Dark Vengeance' and the audio dramas 'Trials of Azrael', 'Ascension of Balthasar', 'Terror Nihil', 'Bloodspire' and 'Malediction', as well as several short stories."
    },
    {
      name: "Matthew Farrer",
      slug: "matthew-farrer",
      bio: "Matthew Farrer is the author of the novella 'The Inheritor King', which appears in Sabbat Crusade. He also wrote the Warhammer 40,000 novels 'Crossfire', 'Legacy' and 'Blind', along with numerous short stories, including 'The Headstone and Hammerstone Kings' for Sabbat Worlds and the Horus Heresy tales 'After Desh'ea' and 'Vorax'. He lives and works in Australia."
    },
    {
      name: "Peter Fehervari",
      slug: "peter-fehervari",
      bio: "Peter Fehervari is the author of the novels 'Genestealer Cults' and 'Fire Caste', featuring the Astra Militarum and T'au Empire, the novella 'Fire and Ice', and the T'au-themed Quick Reads 'Out Caste' and 'A Sanctuary of Wyrms', the latter of which appeared in the anthology 'Deathwatch: Xenos Hunters'. He also wrote the Space Marines Quick Reads 'Nightfall', which was in the 'Heroes of the Space Marines' anthology, and 'The Crown of Thorns'. He lives and works in London."
    },
    {
      name: "John French",
      slug: "john-french",
      bio: "John French's origins lie in writing roleplaying games, and this shows in his deep and nuanced characters and intricate storylines - notably in the Ahriman series. He has also written some oustanding tales of the Inquisition and several key Horus Heresy stories, many featuring the Imperial Fists. He lives and works in Nottingham."
    },
    {
      name: "L J Goulding",
      slug: "l-j-goulding",
      bio: "LJ Goulding is the author of the Horus Heresy audio drama 'The Heart of the Pharos', while for Space Marine Battles he has written the novel 'Slaughter at Giant's Coffin' and the audio drama 'Mortarion's Heart!. His other Warhammer fiction includes 'The Great Maw' and 'Kaldor Draigo: Knight of Titan', and he has continued to explore the dark legacy of Sotha in 'The Aegidan Oath' and 'Scythes of the Emperor: Daedalus!. He lives and works in the US."
    },
    {
      name: "David Guymer",
      slug: "david-guymer",
      bio: "A sneaky servant of the Horned Rat, the Yorkshire-based David Guymer is rumoured to try and sneak skaven into everything he writes. As well as numerous rat-related works, he has written several Warhammer Age of Sigmar tales and a host of Warhammer 40,000 fiction, including a novel about the Iron Hands and volumes in The Beast Arises series."
    },
    {
      name: "Guy Haley",
      slug: "guy-haley",
      bio: "Guy Haley (born 1973) is an English writer of speculative fiction, predominantly known for his Richards & Klein Investigations series, as well as numerous fiction contributions to various Warhammer 40,000 series."
    },
    {
      name: "Rachel Harrison",
      slug: "rachel-harrison",
      bio: "Rachel Harrison writes Warhammer 40k stories for Black Library. She also publishes under the name Ray Harrison."
    },
    {
      name: "Justin D Hill",
      slug: "justin-d-hill",
      bio: "Justin D Hill is the author of the Space Marine Battles novel 'Storm of Damocles' and the short stories 'Last Step Backwards', 'Lost Hope' and 'The Battle of Tyrok Fields', following the adventures of Lord Castellan Ursarkar E. Creed, as well as 'Truth Is My Weapon', and the Warhammer tales 'Golgfag's Revenge' and 'The Battle of Whitestone' for Black Library."
    },
    {
      name: "Darius Hinks",
      slug: "darius-hinks",
      bio: "Darius Hinks' first novel, 'Warrior Priest', won the David Gemmell Morningstar award for best newcomer. Since then he has carved a bloody swathe through the Warhammer World in works such as 'Island of Blood', 'Sigvald', 'Razumov's Tomb' and the Orion trilogy. He has also ventured into the Warhammer 40,000 universe with the Space Marine Battles novella 'Sanctus' and the novel 'Mephiston: Blood of Sanguinius', and the Mortal Realms with 'Hammers of Sigmar!."
    },
    {
      name: "Andy Hoare",
      slug: "andy-hoare",
      bio: "Andy Hoare is a Canadian author known for his work in the Warhammer 40,000 universe, particularly the Horus Heresy series."
    },
    {
      name: "Nick Horth",
      slug: "nick-horth",
      bio: "Not much could be found online about Nick Horth, but he is a background writer for Games Workshop, as his X profile biography states."
    },
    {
      name: "Paul Kearney",
      slug: "paul-kearney",
      bio: "Paul Kearney's Warhammer 40,000 work comprises the short story 'The Last Detail' from 'Legends of the Space Marines', along with the Ultramarines novels 'Calgar's Fury' and 'Calgar's Siege'. He studied at Lincoln College, Oxford and has been widely published, as well as being longlisted for the British Fantasy Award. He lives and works in Port Glenone, Northern Ireland."
    },
    {
      name: "Phil Kelly",
      slug: "phil-kelly",
      bio: "Phil Kelly is perhaps best known as a background writer in the Games Workshop Design Studio, working on codexes and campaign books. He has also amassed an impressive list of Black Library credits, notably his Tau Empire stories 'Farsight', 'Blades of Damocles' and 'Farsight: Crisis of Faith'. He has also written a Damocles novella and audio drama, the novel 'Dreadfleet' and a host of short stories, plus the Warhammer End Times prequel 'Sigmar's Blood'."
    },
    {
      name: "William King",
      slug: "william-king",
      bio: "William King is the author of the Tyrion and Teclis saga and the Macharian Crusade trilogy, as well as the much-loved Gotrek & Felix series and the Space Wolf novels. His short stories have appeared in many magazines and compilations, including White Dwarf and Inferno! Bill was born in Stranraer, Scotland, in 1959 and currently lives in Prague."
    },
    {
      name: "Nick Kyme",
      slug: "nick-kyme",
      bio: "Nick Kyme is the author of the popular Salamanders series in Warhammer 40,000, and has also made an in-depth exploration of the Legion and their primarch Vulkan in the Horus Heresy. His other writing credits includes Space Marine Battles, and several works set in the Warhammer Old World and Age of Sigmar. He also writes comics, most recently the Blood Bowl series 'More Guts, More Glory', and is a prolific writer of audio dramas, including Censure, Red-Marked and Veil of Darkness, among others."
    },
    {
      name: "Mike Lee",
      slug: "mike-lee",
      bio: "Mike Lee's credits for Black Library include the Horus Heresy novel 'Fallen Angels', the Time of Legends trilogy 'The Rise of Nagash' and the Space Marine Battles novella 'Traitor's Gorge'. Together with Dan Abnett, he wrote the five-volume Malus Darkblade series. An avid wargamer and devoted fan of pulp adventure, Mike lives in the United States."
    },
    {
      name: "Nathan Long",
      slug: "nathan-long",
      bio: "Nathan Long hails from Los Angeles, California, where he began his career as a screenwriter in Hollywood. He has written a wide selection of Warhammer fantasy novels, including the Blackhearts trilogy and the adventures of Ulrika the vampire. To many fans, he is best known for his work on the hugely successful Gotrek & Felix series, including five full-length novels and the first Black Library fantasy audio drama, 'Slayer of the Storm God'."
    }
    ,
    {
      name: "Graeme Lyon",
      slug: "graeme-lyon",
      bio: "Graeme Lyon is the author of the Space Marine Battles novella 'Armour of Faith' and a host of Warhammer 40,000, Warhammer Age of Sigmar and Warhammer short stories including 'The Carnac Campaign: Sky Hunter', 'Kor'sarro Khan: Huntmaster', 'Black Iron', 'The Eighth Victory', 'The Sacrifice' and 'Bride of Khaine', along with the Blood Bowl story 'Mazlocke's Cantrip of Superior Substitution'. He has recently returned to Scotland after a six year exile in Nottingham."
    }
    ,
    {
      name: "Steve Lyons",
      slug: "steve-lyons",
      bio: "Steve Lyons' work in the Warhammer 40,000 universe includes the novellas 'Engines of War' and 'Angron's Monolith', the Imperial Guard novels 'Ice World' and 'Dead Men Walking' - now collected in the omnibus 'Honour Imperialis' - and the audio dramas 'Waiting Death' and 'The Madness Within'. He has also written numerous short stories from the grim darkness of the far future."
    }
    ,
    {
      name: "Robbie MacNiven",
      slug: "robbie-macniven",
      bio: "Robbie MacNiven is a highland-born History graduate from the University of Edinburgh. He has written the Warhammer 40,000 novels 'Carcharodons: Red Tithe' and 'Legacy of Russ' as well as the short stories 'Redblade', 'A Song for the Lost' and 'Blood and Iron' for Black Library. His hobbies include re-enacting, football and obsessing over Warhammer 40,000."
    }
    ,
    {
      name: "George Mann",
      slug: "george-mann",
      bio: "George Mann is an author and editor based in the East Midlands. For Black Library, he is best-known for his stories featuring the Raven Guard, which include the audio dramas 'Helion Rain' and 'Labyrinth of Sorrows' and the novella 'The Unkindness of Ravens', plus a number of short stories."
    }
    ,
    {
      name: "Graham McNeill",
      slug: "graham-mcneill",
      bio: "Originally from Scotland and now based in California, Graham McNeill has written everything you could possibly imagine - and then some. He has won awards from his Sigmar novels, been a New York Times bestseller for his Horus Heresy books, and nearly destroyed the Ultra- marines in the Uriel Ventris series of Warhammer 40k novels - and that only scratches the surface."
    }
    ,
    {
      name: "Sandy Mitchell",
      slug: "sandy-mitchell",
      bio: "Sandy Mitchell is the author of a long-running series of Warhammer 40,000 novels about the hero of the Imperium, Commissar Ciaphas Cain. The most recent book in that series is 'The Greater Good', and there are also the audio dramas 'Dead In The Water' and 'The Devil You Know'. He has also written a plethora of short stories, including 'The Last Man' in the Sabbat Worlds anthology, along with several novels set in the Warhammer World. He lives and works in Cambridge."
    }
    ,
    {
      name: "Kim Newman",
      slug: "kim-newman",
      bio: "Kim James Newman (born 31 July 1959) is an English journalist, film critic, and fiction writer. He is interested in film history and horror fiction – both of which he attributes to seeing Tod Browning's Dracula at the age of eleven – and alternative history. He has won the Bram Stoker Award, the International Horror Guild Award, and the BSFA award."
    }
    ,
    {
      name: "Anthony Reynolds",
      slug: "anthony-reynolds",
      bio: "Anthony Reynolds is the author of the Horus Heresy novella 'The Purge', audio drama 'Khârn: The Eightfold Path' and short stories 'Scions of the Storm' and 'Dark Heart'. In the Warhammer 40,000 universe, he has written the Space Marine Battles novel 'Khârn: Eater of Worlds', alongside the audio drama 'Chosen of Khorne', also featuring Khârn. He has also penned the Word Bearers trilogy and many short stories. Hailing from Australia, he is currently settled on the west coast of the United States."
    }
    ,
    {
      name: "Josh Reynolds",
      slug: "josh-reynolds",
      bio: "Many tales are told of Josh Reynolds, and not even he knows if they are true or not. What is true is that he is a prolific writer who brings pulp sensibilities to his work. He has written Gotrek & Felix, Fabius Bile, numerous tales in the Age of Sigmar and many more. He also resurrected Nagash and ended the world in the End Times series."
    }
    ,
    {
      name: "Rob Sanders",
      slug: "rob-sanders",
      bio: "Rob Sanders is the author of 'The Serpent Beneath', a novella that appeared in the New York Times bestselling Horus Heresy anthology 'The Primarchs!. His other Black Library credits include the The Beast Arises novels 'Predator, Prey' and 'Shadow of Ullanor', the Warhammer 40,000 titles 'Adeptus Mechanicus: Skitarius' and 'Tech-Priest', 'Legion of the Damned', 'Atlas Infernal' and 'Redemption Corps' and the audio drama 'The Path Forsaken!. He has also written the Warhammer Archaon duology, 'Everchosen' and 'Lord of Chaos' along with many Quick Reads for the Horus Heresy and Warhammer 40,000. He lives in the city of Lincoln, UK."
    }
    ,
    {
      name: "Andy Smillie",
      slug: "andy-smillie",
      bio: "Andy Smillie is best known for his visceral and action-packed Flesh Tearers stories, notably the novellas 'Flesh of Cretacia' and 'Sons of Wrath'. He has also written numerous Warhammer 40,000 and Horus Heresy short stories and audio dramas, such as 'The Herald of Sanguinius', 'The Kauyon', 'Reparaton' and 'Deathwolf', as well as episodes of 'The Tranzia Rebellion. He hails from Scotland but lives and works in Nottingham."
    }
    ,
    {
      name: "Ian St Martin",
      slug: "ian-st-martin",
      bio: "Ian St Martin is the author of the Warhammer 40,000 novels 'Legends of the Dark Millennium: Deathwatch' and 'Lucius: The Faultless Blade', alongside a number of short stories, including 'Hunting Ground', 'Swordwind' and 'City of Ruin', plus the audio drama 'The Embrace of Pain! He is located in Washington DC."
    }
    ,
    {
      name: "J C Stearns",
      slug: "j-c-stearns",
      bio: "J C Stearns is a writer who lives in a swamp in Illinois with his wife and son, as well as more animals than is reasonable. He started writing for Black Library in 2016 and is the author of the short story 'Wraithbound', as well as 'Turn of the Adder', included in the anthology Inferno! Volume 2 and 'The Marauder Lives', in the Horror anthology Maledictions. He plays Salamanders, Dark Eldar, Sylvaneth, and as soon as he figures out how to paint lightning bolts, Night Lords."
    }
    ,
    {
      name: "James Swallow",
      slug: "james-swallow",
      bio: "James Swallow is best known to Warhammer fans for his Blood Angels and Sisters of Battle stories, and has also written numerous Horus Heresy tales, including the long running saga of the Knight Errant Nathaniel Garro. He lives in Kent."
    }
    ,
    {
      name: "Gav Thorpe",
      slug: "gav-thorpe",
      bio: "A former games developer and Warhammer Loremaster, Gav Thorpe brings a deep knowledge of the inner workings of the Warhammer universes to everything he writes. He is best known for his work on the Dark Angels, along with fan favourite series like Path of the Eldar, The Sundering and Last Chancers. He has written for almost every corner of the Warhammer 40,000, Warhammer Fantasy Battles and Warhammer Age of Sigmar settings and shows no signs of slowing down."
    }
    ,
    {
      name: "Ian Watson",
      slug: "ian-watson",
      bio: "Ian Watson - author of Black Library's seminal Inquisition War trilogy - received screen credit for the movie A.I.: Artificial Intelligence, on which he worked previously with Stanley Kubrick. lan started writing science fiction as a way of staying sane while teaching in Tokyo years ago, after living in East Africa. A number of his books have been translated different languages, and His stories have been finalists for the Hugo and Nebula Awards. Ian lives in Gijón, Spain."
    }
    ,
    {
      name: "C L Werner",
      slug: "c-l-werner",
      bio: "C L Werner is one of Black Library's most beloved fantasy authors, author of countless novels in the Old World and the Mortal Realms, including the Thanquol trilogy, 'The Red Duke', 'Lord of Undeath' and the Time of Legends trilogy 'The Black Plague.' He has also written the Warhammer 40,000 novels 'The Siege of Castellax' and 'Cult of the Warmason' as well as more than thirty short stories."
    }
    ,
    {
      name: "Richard Williams",
      slug: "richard-williams",
      bio: "Richard Williams was born in Nottingham and is the author of the Warhammer 40,000 novels 'Imperial Glory' and 'Relentless', featuring the Imperial Guard and the Imperial Navy respectively, the Warhammer novel 'Reiksguard', and various short stories including 'Orphans of the Kraken'. He also penned the Black Library background book 'Liber Chaotica: Khorne'. He is a theatre director, tabletop game designer and game design podcast co-host."
    }
    ,
    {
      name: "Chris Wraight",
      slug: "chris-wraight",
      bio: "Chris Wraight is a freelance writer and teacher currently living and working in Oxford, UK. His first novel was published in 2008 and since then, he’s published books set in the Warhammer Fantasy and Stargate:Atlantis universes."
    },
    {
      name: "Mitchel Scanlon",
      slug: "mitchel-scanlon",
      bio: "Mitchel Scanlon is the author of the Horus Heresy novel ‘Descent of Angels’, exploring the history of the Dark Angels Legion and their primarch Lion El’Jonson. He has also written Warhammer Fantasy fiction for Black Library."
    }

  ]);

  console.log("Authors seeded");
  return authors;
};