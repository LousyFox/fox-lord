const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.user('setPresence', setPresence => {
        game: {
          name: `Играет в твои нервы`,
        }
      });

client.on('message', message => {
    if (message.content === '!пинг') {
    	message.reply('пшёл нахуй, нормальный пинг');
  	}
});

client.on('message', message => {
    if(message.content === '!тест') {
    if (message.member.roles.equals("537700464888643595"))
      {      
        message.reply("Ухх, сюка, сработало!");
      } 
    else 
      {
        message.reply("Шот не так, сосать");
      }
      }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
