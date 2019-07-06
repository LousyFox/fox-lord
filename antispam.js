const Discord = require("discord.js"); 

var authors = [];
var warned = [];
var banned = [];
var messageLog = [];

module.exports = async (bot, options) => {

  
  const warnBuffer = 5; 
  const maxBuffer =  8;
  const interval = 1000;
  const warningMessage = "хватит спамить!"; 
  const banMessage = "был забанен за спам!"; 
  const maxDuplicatesWarning = (7); 
  const maxDuplicatesBan = (10); 
  const deleteMessagesAfterBanForPastDays = (7); 
  const exemptRoles = []; 
  const exemptUsers = []; 

  if(isNaN(warnBuffer)) throw new Error("Нету буфера для варна.");
  if(isNaN(maxBuffer)) throw new Error("Нету буфера для мута.");
  if(isNaN(interval)) throw new Error("Нету интервала.");
  if(!isNaN(banMessage) || banMessage.length < 5) throw new Error("Нету сообщения для мута.");
  if(!isNaN(warningMessage) || warningMessage.length < 5) throw new Error("Нету сообщения для предупреждения.");
  if(isNaN(maxDuplicatesWarning)) throw new Error("Нету максимальных повторяющих сообщений для предупреждения.")
  if(isNaN(maxDuplicatesBan)) throw new Error("Нету максимальных повторяющих сообщений для мут.");
  if(isNaN(deleteMessagesAfterBanForPastDays)) throw new Error("Не указано сколько удалять.");
  if(exemptRoles.constructor !== Array) throw new Error("Нету ролей, или аррея.");
  if(exemptUsers.constructor !== Array) throw new Error("Нету пользователей, или аррея.");
  
  // Custom 'checkMessage' event that handles messages
 bot.on("checkMessage", async (message) => {
 
  // Ban the User
  const banUser = async (m, banMsg) => {
    for (var i = 0; i < messageLog.length; i++) {
        if (messageLog[i].author == m.author.id) {
          messageLog.splice(i);
        }
      }
  
      banned.push(m.author.id);
  
      let user = m.guild.members.get(m.author.id);
      
      if (user) {
        let muteroleauto = message.guild.roles.find('name', "muted");  
        user.addRole(muteroleauto.id);

        setTimeout(function(){
            user.removeRole(muteroleauto.id);
        }, 86400000);
        return message.channel.send(`Замутил пользователя <@!${user.id}> на сутки, за неоднократный спам.`);
    }
  }
  
    
   // Warn the User
   const warnUser = async (m, reply) => {
    warned.push(m.author.id);
    m.channel.send(`<@${m.author.id}>, ${reply}`); // Regular Mention Expression for Mentions
   }

    if (message.author.bot) return;
    if (message.channel.type !== "text" || !message.member || !message.guild || !message.channel.guild) return;
   
    if (message.member.roles.some(r => exemptRoles.includes(r.name)) || exemptUsers.includes(message.author.tag)) return;

    if (message.author.id !== bot.user.id) {
      let currentTime = Math.floor(Date.now());
      authors.push({
        "time": currentTime,
        "author": message.author.id
      });
      
      messageLog.push({
        "message": message.content,
        "author": message.author.id
      });
      
      let msgMatch = 0;
      for (var i = 0; i < messageLog.length; i++) {
        if (messageLog[i].message == message.content && (messageLog[i].author == message.author.id) && (message.author.id !== bot.user.id)) {
          msgMatch++;
        }
      }
      
      if (msgMatch == maxDuplicatesWarning && !warned.includes(message.author.id)) {
        warnUser(message, warningMessage);
      }

      if (msgMatch == maxDuplicatesBan && !banned.includes(message.author.id)) {
        banUser(message, banMessage);
      }

      var matched = 0;

      for (var i = 0; i < authors.length; i++) {
        if (authors[i].time > currentTime - interval) {
          matched++;
          if (matched == warnBuffer && !warned.includes(message.author.id)) {
            warnUser(message, warningMessage);
          } else if (matched == maxBuffer) {
            if (!banned.includes(message.author.id)) {
              banUser(message, banMessage);
            }
          }
        } else if (authors[i].time < currentTime - interval) {
          authors.splice(i);
          warned.splice(warned.indexOf(authors[i]));
          banned.splice(warned.indexOf(authors[i]));
        }

        if (messageLog.length >= 200) {
          messageLog.shift();
        }
      }
    }
  });
}