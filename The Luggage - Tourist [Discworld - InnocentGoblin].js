/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Creature
	Effect:		This script adds a creature called "The Luggage" for the Ranger subclass "The Tourist".
				The homebrew pdf upon which this race is based was created by InnocentGoblin and is inspired by Discworld and the mind of Sir Terry Pratchett.			
				The pdf can be found here (https://www.gmbinder.com/share/-MzzKRfU9Tvu2xCsJiRS)
	Code by:	OtGW (Zac Luchette) https://github.com/OtGW
	Date:		2023-03-10 (sheet v13.1.4+221130)
*/

var iFileName = "The Luggage - Tourist [Discworld - InnocentGoblin].js"
RequiredSheetVersion("13.1.0")

CreatureList["the luggage"] = {
  name: "The Luggage",
  source: ["DW", 29],
  size: 3,
  type: "Construct",
  alignment: "Neutral",
  ac: 17,
  hp: 100,
  hd: [20, 10],
  speed: "60 ft",
  proficiencyBonus: 3,
  challengeRating: "6",
  scores: [18, 16, 20, 10, 12, 8],
  saves: [7, "", 8, "", "", ""],
  senses: "Darkvision 60ft, Truesight 20ft",
  attacksAction: 1,
  attacks: [
    {
      name: "Bite",
      ability: 1,
      damage: [2, 10, "piercing"],
      abilitytodamage: false,
      range: "Melee (5 ft)",
      description:
        "If the target is medium or smaller in size and is killed by this, The Luggage will swallow and devour the creature.",
    },
  ],
  skills: {
    "Intimidation": 4,
  },
  damage_resistances:
    "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
  damage_immunities: "Necrotic, Poison, Psychic",
  condition_immunities:
    "Charmed, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",
  languages: "Understands all languages but doesn't speak",
  traits: [
    {
      name: "Owner Awareness",
      description:
        "The Luggage knows the location of its owner, no matter what plane they are on.",
      header: "The Luggage",
    },
  ],
}
