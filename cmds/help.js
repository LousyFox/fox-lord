const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let a = message.author;
    let ambed = new Discord.RichEmbed()
    .setTitle("Команды:")
    .setTimestamp()
    .setFooter("Твой милый бот", "https://cs4.pikabu.ru/post_img/big/2016/07/16/9/1468678258134342020.jpg")
    .setColor('#FFFF00')
    .addField("!пинг","Устанавливает точное время соединение клианта с сервером")
    .addField("!ролл (цифра)","выдает рандомное число из нужного диапозона")
    .addField("!юзеринфо","Показывает всю информацию о клиенте")
    .addField("!инфо","Показывает информацию о сервере")
    .addField("!пидор","Уточняет вашу оринтацию благодоря новым методам, после чего выдает вам роль")
    .addField("!дота","Выдает вам роль, героя и позицию на следующую катку в доте")
    .setThumbnail("http://pngimg.com/uploads/question_mark/question_mark_PNG73.png")
    
    bot.send({embed:ambed});

};
module.exports.help = {
    name: "хелп"
};