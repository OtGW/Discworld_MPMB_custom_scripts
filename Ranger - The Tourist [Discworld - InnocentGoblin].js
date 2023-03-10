/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Ranger, called "The Tourist"
				The homebrew pdf upon which this race is based was created by InnocentGoblin and is inspired by Discworld and the mind of Sir Terry Pratchett.			
				The pdf can be found here (https://www.gmbinder.com/share/-MzzKRfU9Tvu2xCsJiRS)
                Note: The extra spells added to the class's spell list by the spellcastingExtra array are not part of InnocentGoblin's original work; they are a GM addition for OtGW's campaign.
	Code by:	OtGW (Zac Luchette) https://github.com/OtGW
	Date:		2023-03-09 (sheet v13.1.4+221130)
*/

var iFileName = "Ranger - The Tourist [Discworld - InnocentGoblin].js"
RequiredSheetVersion("13.1.0")

AddSubClass("ranger", "tourist", {
  regExpSearch: /tourist/i,
  subname: "The Tourist",
  fullname: "Ranger: The Tourist",
  source: ["DW", 29],
  features: {
    "subclassfeature3": {
      name: "Distant Foes",
      source: ["DW", 29],
      minlevel: 3,
      description: desc([
        "My Favored Enemy ability is improved. Once per short rest I may meditate for 1 minute and choose a new temporary additional Favoured Enemy. Until I choose another Favoured Enemy, I learn a language associated with the chosen creature/Humanoid type.",
        "Additionally, when fighting my Favoured Enemy, I gain advantage on attack rolls and deal an additional 2d6 damage. This extra damage increases to 3d6 at level 7, 4d6 at level 11, and 5d6 at level 15.",
      ]),
      additional: levels.map(function (n) {
        return n < 3
          ? ""
          : "adv+" + (n < 7 ? 2 : n < 11 ? 3 : n < 15 ? 4 : 5) + "d6"
      }),
      usages: 1,
      recovery: "short rest",
    },
    "subclassfeature3.1": {
      name: "Distant Shores",
      source: ["DW", 29],
      minlevel: 3,
      description: desc([
        "My Natural Explorer ability is improved. Once per short rest I may meditate for 1 minute and gain an additional Favoured Terrain. I gain the benefits of this terrain as the Natural Explorer ability grants until I choose another. In addition, whilst in one of my favoured terrains I gain the following abilities:",
        "I gain advantage on Medicine, Nature, Stealth and Survival skill checks.",
        "I am not required to expend a spell slot to activate Primal Awareness.",
      ]),
      usages: 1,
      recovery: "short rest",
    },
    "subclassfeature7": {
      name: "The Luggage",
      source: ["DW", 29],
      minlevel: 7,
      description: desc([
        "Half Bag of Holding, half homicidal maniac, The Luggage is a large chest made of Sapient pearwood. It has hundreds of tiny feet and will follow it's owner where ever they go.",
        "Once per turn, I may use my bonus action or one of my multiple attacks to have The Luggage make a bite attack.",
        "If lost or destroyed, I may meditate for an hour and receive a replacement. By doing this, the previous Luggage will be destroyed along with anything stored inside it.",
      ]),
      action: ["bonus action", ""],
      creaturesAdd: [["The Luggage"]],
    },
    "subclassfeature7.1": {
      name: "Iconograph",
      source: ["DW", 29],
      minlevel: 7,
      description: desc([
        "A wonderful device that creates instant paintings. The device is powered by a tiny imp inside; this imp perfectly paints the image it's pointed at.",
        "As a bonus action, I may point the Iconograph and receive a perfect picture of the scene.",
        "If lost or destroyed, I may meditate for an hour and receive a replacement. By doing this, the previous Iconograph will be destroyed along with anything stored inside it.",
      ]),
      action: ["bonus action", ""],
    },
    "subclassfeature11": {
      name: "Lingua Franca",
      source: ["DW", 29],
      minlevel: 11,
      description:
        "\n   " +
        "I now understand all spoken language. While listening to someone speaking a language I do not speak for one minute, I can begin to speak it fluently.",
    },
    "subclassfeature15": {
      name: "Far Flung Traveler",
      source: ["DW", 29],
      minlevel: 15,
      description:
        "\n   " +
        "Whilst in my favoured terrain and attacking my favoured enemy, I gain an additional 2 attacks.",
    },
  },
  spellcastingExtra: [
    "cause fear",
    "charm person",
    "command",
    "expeditious retreat",
    "inflict wounds",
    "purify food and drink",
    "silvery barbs",
    "unseen servant",
    "enthrall",
    "detect thoughts",
    "hold person",
    "mind spike",
    "suggestion",
    "zone of truth",
    "enemies abound",
    "fast friends",
    "incite greed",
    "motivational speech",
    "intellect fortress",
    "speak with dead",
    "tiny servant",
    "tongues",
    "vampiric touch",
    "charm monster",
    "compulsion",
    "confusion",
    "dominate beast",
    "cone of cold",
    "dominate person",
    "dream",
    "hallow",
    "legend lore",
    "modify memory",
    "scrying",
    "synaptic static",
  ],
})
