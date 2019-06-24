const Discord = module.require("discord.js");
const fs = require("fs");
const ms = require("ms"); 

module.exports.run = async (bot,message,args) => {
let tomute = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
if(!tomute) return message.reply("такого участника нету");
if(tomute.hasPermission("ADMINISTRATOR")) return message.reply("у вас нет прав на это, идите нахуй");
let muterole = message.guild.roles.find('name', "muted");
 
  if(!muterole){
      try{
          muterole = await message.guild.createRole({
              name:"muted",
              color: "#000000",
              permission: []
          })
          message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muterole,{
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
            });
          });
      }catch(e){
          console.log(e.stack);
      }
  }

let mutechannel = message.guild.channels.get("537720268446236682");
if(!mutechannel) return message.channel.send("Сбились настройки логирования, проверьте пожалуйста их.");
let mutetime = args[1];
if(!mutetime) return message.reply("Укажите время, блэать!");
let muteEmbed = new Discord.RichEmbed()
.setDescription("Мут")
.setColor('#00538A')
.setThumbnail("https://freepngimg.com/thumb/silence/7-2-silence-picture-thumb.png")
.setFooter("Мут систем v2000", "https://www.meme-arsenal.com/memes/5fb377d05d9593b7eb0344b79532afe0.jpg")
.addField("Был замучен:", `${tomute}`)
.addField("Администратор:", `${message.author}`)
.addField("Канал:", message.channel)
.addField("Время мута:", `${ms(ms(mutetime))}`)
.addField("Начало мута:", message.createdAt);

await(tomute.addRole(muterole.id));
message.delete();
message.channel.send('пользователь' + `<@${tomute.id}>` + ' был замучен на`'+ `${ms(ms(mutetime))}` + '`');
mutechannel.send({embed:muteEmbed});

setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> был размучен`);
},ms(mutetime));


};
module.exports.help = {
    name: "мут"
};