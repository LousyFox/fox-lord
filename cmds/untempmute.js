const Discord = module.require("discord.js");
const fs = require("fs");
const ms = require("ms"); 

module.exports.run = async (bot,message,args) => {
if ((args[0]) == null) {message.reply("Не верно указан пользователь, напиши так: ```!унмут <юзер упоминание>```"); return; }
let tomute = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
if(!tomute) return message.reply("такого участника нету");
if (!tomute.roles.get('592734106471628869')) { message.reply('Он не в муте, прикинь...'); return; }
let muterole = message.guild.roles.find('name', "muted");

if (message.member.roles.get('537700464888643595') || message.member.roles.get('537705223301365781') || message.member.roles.get('537704565043363840')) {          
let muteEmbed = new Discord.RichEmbed()
.setDescription("Мут снят")
.setColor('#00FF00')
.setThumbnail("http://mediaseller.agency/wp-content/uploads/2018/06/pravki.png")
.setFooter("Мут систем v2000", "https://www.meme-arsenal.com/memes/5fb377d05d9593b7eb0344b79532afe0.jpg")
.addField("Снят мут с:", `${tomute}`)
.addField("Администратор:", `${message.author}`)
.addField("Канал:", message.channel);

message.channel.send('Пользователь' + `<@${tomute.id}>` + ' был размутен принудительно');
message.delete();
mutechannel.send({embed:muteEmbed}); 
tomute.removeRole(muterole.id);
} else 
      {
        message.reply("А пососать не завернуть?");
      };
     
};
module.exports.help = {
    name: "унмут"
};