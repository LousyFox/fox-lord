const Discord = module.require("discord.js");
const fs = require("fs");
const talkedRecently = new Set(),
      search = require('youtube-search');

module.exports.run = async (bot,message,args) => {
if ((args[0]) == null) { message.reply("так, а чё искать то тебе?"); return;}
let mreason = args.slice(0).join(" ") || "---";

search(mreason, {
    maxResults: 1,
    key: process.env.GOOGLE_KEY
  }, (err, res) => {
    if (err) return message.channel.send("**Нет результатов!**")
    if (!res[0]) return message.channel.send("**Нет результатов!**")

    message.reply(res[0].link)
});
};
module.exports.help = {
    name: "ютуб"
};
