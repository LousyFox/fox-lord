const Discord = module.require("discord.js");
const fs = require("fs");
exports.run = async (bot, message, args) => { 
    let a = message.author;
    let ambed = new Discord.RichEmbed()
    .setTitle("Роли:")
    .setTimestamp()
    .setFooter("Твой милый бот", "https://cs4.pikabu.ru/post_img/big/2016/07/16/9/1468678258134342020.jpg")
    .setColor('#8B00FF')
    .addField("Администрация:","<@&537700464888643595> - Cоздатель сервера.\n<@&537705223301365781> - Отвечает за набор администрации и ответы на вопросы.\n<@&537704565043363840> - Старшая администрация, отвечает за порядок в чатах и войс-чатах.\n<@&537703136597639178> - Начальная администрация, отвечает за порядок в войс-чатах.")
    .addField("Звания участника:","<@&596399865274171461> - Настоящий псих, но король, выдается на 100 уровне.\n<@&596399524847812621> - Тот кто сидит тут вечность, выдается на 70 уровне.\n<@&596398929718018049> - Активист, выдается на 35 уровне.\n<@&537706999845093377> - Вип-персона, выдается на 20 уровне.\n<@&537702291059507213> - Элита, доверенное лицо сервера, выдается на 10 уровне.\n<@&537701837000802304> - Проверенный пользователь, выдается на 5 уровне.\n<@&537701217879588878> - Начальное звено, выдается разу при входе на сервер.")
    .addField("Прочие роли:","<@&597060114045861911> - Данную роль можно только купить в *'!донат'*.\n<@&592343493905743906> - Бот дискорд-сервера, выдается только ботам.\n<@&572598599024640010> *и* <@&572598627126607882> - Результат проверки через '*!пидор*'.\n<@&537707501819396098> - Роль для девушек, выдается только девушкам.\n<@&537706782701649950> - Тот, кто знает своё дело, выдается на усмотрение администрации.\n**1-30 см** - выдается результатом '*!член*'\n**Ключи** выдаются в канале <#592333205680554001>")
    .setThumbnail("http://publications.returnonintelligence.ru/wp-content/uploads/2015/11/techlead.png");

    message.delete(15000);
    message.channel.send({embed:ambed}).then(async msg => await msg.delete(15000));
};
module.exports.command = {
    name: 'roles',
    aliases: ["роли", "роль", "рольменю"],
    description: "Показывает роли, чо доебался?",
    usage: "usercommand",
    category: "user",
    enabled: true
  }; 