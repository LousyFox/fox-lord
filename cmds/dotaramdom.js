const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {

 var Hero = Array("Abaddon","Alchemist","Ancient Apparition","Anti-Mage","Arc Warden","Axe","Bane","Batrider","Beastmaster","Bloodseeker","Bounty Hunter","Brewmaster","Bristleback","Broodmother","Centaur Warrunner","Chaos Knight","Chen","Clinkz","Clockwerk","Crystal Maiden","Dark Seer","Dark Willow","Dazzle","Death Prophet","Disruptor","Doom","Dragon Knight","Drow Ranger","Earth Spirit","Earthshaker","Elder Titan","Ember Spirit","Enchantress","Enigma","Faceless Void","Grimstroke","Gyrocopter","Huskar","Invoker","Io","Jakiro","Juggernaut","Keeper of the Light","Kunkka","Legion Commander","Leshrac","Lich","Lifestealer","Lina","Lion","Lone Druid","Luna","Lycan","Magnus","Mars","Medusa","Meepo","Mirana","Monkey King","Morphling","Naga Siren","Natures Prophet","Necrophos","Night Stalker","Nyx Assassin","Ogre Magi","Omniknight","Oracle","Outworld Devourer","Pangolier","Phantom Assassin","Phantom Lancer","Phoenix","Puck","Pudge","Pugna","Queen of Pain","Razor","Riki","Rubick","Sand King","Shadow Demon","Shadow Fiend","Shadow Shaman","Silencer","Skywrath Mage","Slardar","Slark","Sniper","Spectre","Spirit Breaker","Storm Spirit","Sven","Techies","Templar Assassin","Terrorblade","Tidehunter","Timbersaw","Tinker","Tiny","Treant Protector","Troll Warlord","Tusk","Underlord","Undying","Ursa","Vengeful Spirit","Venomancer","Viper","Visage","Warlock","Weaver","Windranger","Winter Wyvern","Witch Doctor","Wraith King","Zeus");
 var Line = Array('Mid, 1 позиция', 'Easy, 2 позиция', 'Easy, 5 позиция', 'Hard, 3 позиция', 'Hard 4 позиция')
 const randomLine = Line[Math.floor(Math.random()*Line.length)];
 const randomHero = Hero[Math.floor(Math.random()*Hero.length)];
 const ColorRan = Math.floor(Math.random() * 6) + 1 ;

 let a = message.author;
 let dotasend = new Discord.RichEmbed()
 .setTitle("На чём бы вам сегодня скатать, да?")
 .setTimestamp()
 .addField(`${randomHero}`, `${randomLine}`, true)
 .setAuthor(a.username, a.avatarURL)
 .setThumbnail("./img/"+`${randomHero}`+".jpg")
 .setColor('#'+`${ColorRan}`)
 .setFooter("Dota Random Hero", "https://avatanplus.com/files/resources/mid/5b4d22308ef8c164a54d8dca.png")

 bot.send({embed:dotasend});

};
module.exports.help = {
    name: "дота"
};