const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args,connection) => {
    let a = message.author;
    connection.query(`SELECT * FROM xp WHERE id = '${a.id}'`, (err, rows) => {
     if(err) throw err;
     let xpi = rows[0].xp;
     let point = rows[0].point; 

     let lvl;
     if (xpi && xpi >= 1000) {
        lvl = xpi / 1000
     } else {
        lvl = 1
     }
    let roles = message.member.roles.map(r=> "<@&" + r.id + ">").join(', ').replace('<@&537698849184153611>');

    let ambed = new Discord.RichEmbed()
    .setTitle("Информация о участнике")
    .setTimestamp()
    .setFooter("Твой милый бот", "https://cs4.pikabu.ru/post_img/big/2016/07/16/9/1468678258134342020.jpg")
    .setColor('#10c7e2').addField("Имя",a.username)
    .addField("Тэг",a.tag)
    .addField("Дискриминатор",a.discriminator)
    .addField("Опыта:",xpi + " XP")
    .addField("Уровень:",lvl.toFixed(0))
    .addField("Донат поинтов:",point)
    .addField("Роли и ключи:",roles)
    .addField("Создание аккаунта",a.createdAt)
    .setThumbnail(a.avatarURL);

    bot.send({embed:ambed});
});
};
module.exports.help = {
    name: "юзеринфо"
};
