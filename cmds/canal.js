const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);  
    if (message.author.id !== "294844223675564034") { message.reply('Хитрожопых наказываю'); return; }
    if ((args[0])==null && (args[1])==null) { message.delete(); message.reply('пусто везде бл...'); return; }
    if ((args[0])==null) { message.delete(); message.reply('Пустота в обращении...'); return; }
    if ((args[1])==null) { message.delete(); message.reply('Пустота в описании...'); return; }
    message.delete();
    message.channel.send(member + ' ' + args[1]);
};
module.exports.help = {
    name: "канал"
};
