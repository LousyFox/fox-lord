const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args,connection) => {
    if ((args[0]) == null) {message.reply("Не верно указан пользователь, напиши так: ```!поинт <юзер упоминание> <+/-поинты>```"); return; }
    let target = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
    if(!target) return message.reply("такого участника нету");

    connection.query(`SELECT * FROM xp WHERE id = '${target.id}'`, (err, rows) => {
    if(err) throw err;
    let sql;
    if(rows.length < 1) {
    sql = `INSERT INTO xp (id, point) VALUES ('${target.id}', 0)`;
    message.reply(`успешно записал пользователя <@${target.id}> в базу данных`);
    } else {
    let point = rows[0].point;
    sql = `UPDATE xp SET point = ${point} WHERE id = '${target.id}'`
    if ((args[1]) == null) {
        message.reply(`остаток баланса <@${target.id}> на данный момент: ` + `\`\`\`js\n${point}\`\`\``);
      } else {
        message.delete();
        sql = `UPDATE xp SET point = ${point}+${args[1]} WHERE id = '${target.id}'`  
        pints = point + args[1];
        message.reply(`Изменил кол-во поинтов у пользователя <@${target.id}> на **${args[1]}** поинтов \n остаток баланса пользователя на данный момент: ` + `\`\`\`js\n${pints}\`\`\``);
      };
    };
    connection.query(sql);

});
};
module.exports.help = {
    name: "поинт"
};
