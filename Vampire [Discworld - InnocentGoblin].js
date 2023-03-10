/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Race
	Effect:		This script adds a player race called "Vampire" with 2 subraces: "Vampyr" and "Temperance"
				The homebrew pdf upon which this race is based was created by InnocentGoblin and is inspired by Discworld and the mind of Sir Terry Pratchett.			
				The pdf can be found here (https://www.gmbinder.com/share/-MzzKRfU9Tvu2xCsJiRS)
                Small modifications have been made to this race for balance:
                Darkvision increased to 60ft
                Language proficiencies include Common and 1 additional of player's choice
                "Suck Blood" added as natural weapon for clarity (conditions of its use are outlined in descriptions - Vampyr subrace will probably use it more than Temperance, but this makes the attack option mechanically consistent)
                Dust trait modified to restore vampire to full HP if the vampire is brought back using a drop of blood, and addiction saves needing to be made (see trait for more details)
	Code by:	OtGW (Zac Luchette) https://github.com/OtGW
	Date:		2023-03-09 (sheet v13.1.4+221130)
*/

var iFileName = "Vampire [Discworld - Innocent Goblin].js"
RequiredSheetVersion("13.1.0")

RaceList["vampyr vampire"] = {
  regExpSearch: /^(?=.*vampyr)(?=.*vampire).*$/i,
  name: "Vampyr Vampire",
  sortname: "Vampire, Vampyr",
  source: ["DW", 9],
  plural: "Vampyr Vampires",
  size: 3,
  speed: {
    walk: { spd: 30, enc: 20 },
    fly: { spd: 20, enc: 0 },
  },
  languageProfs: ["Common", 1],
  weapons: ["Suck Blood"],
  vision: [
    ["Darkvision", 60],
    ["Sunlight Sensitivity", 0],
  ],
  age: "Vampires are practically immortal in terms of age, your vampirism will allow you to avoid death by old age.",
  height:
    "Vampires are the same size as Humans, they range from 5 to 6ft tall.",
  improvements: "Vampyr Vampire: +2 Charisma, +1 Strength;",
  scores: [1, 0, 0, 0, 0, 2],
  trait:
    "Vampyr Vampire (+2 Charisma, +1 Strength)\nSwarm: You gain a flying speed of 20ft, when you fly, you turn into a swarm of bats. Whilst in bat swarm form, you have no attack, may only move and people trying to hit you have advantage.\nDust: When you are reduced to 0 hit points, you turn into a pile of dust. Whilst you are dust, you have disadvantage on your saving throws. However, if someone drops blood into the pile of dust you are able to come back with full HP and 1 point of exhaustion. If this happens more than once per long rest, an addiction DC save must additionally be made upon each revival.\nBlood Sucking: you are addicted to the life force of others. As an action, you can suck the blood of a target within 5ft of you. When you suck a target's blood, you deal 1d6 piercing damage and heal as much damage as you deal. As a Vampyr you must feed at least once a day, if you do not feed, you gain a point of exhaustion.\nSunlight Sensitivity: Whilst in direct sunlight you have disadvantage on attack rolls and saving throws.",
}

RaceList["temperance vampire"] = {}

WeaponsList["suck blood"] = {
  regExpSearch: /^(?=.*suck)(?=.*blood).*$/i,
  name: "Suck Blood",
  source: ["DW", 10],
  ability: 1,
  type: "Natural",
  damage: [1, 6, "piercing"],
  range: "Melee",
  description: "heal as much damage as you deal",
  abilitytodamage: false,
}
