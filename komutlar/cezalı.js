const Discord = require("discord.js");
exports.run = (client, message, args) => {
  const role = message.guild.roles.find(c => c.id == "800790853932941344");
  
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.channel.send("**Bu Komutu Kullana Bilmek için `Rolleri Yönet` Yetkin Olmalı!**");
  
  let member =
    message.mentions.members.first() || message.guild.members.get(args[0]);
  if (!member)
    return message.channel.send(
      "**Lütfen Kullanıcıyı Etiketleyiniz veya ID'sini Yazınız!**"
    );
  
  message.guild.roles.map(x => {
    member.removeRole(x)
  }, 3000)
  setInterval(() => {
      member.addRole(role);
  })
  message.channel.send(
    `**${member} İsimli Kullanıcının Tüm Rolleri Alındı!\n\`${role.name}\` Rolü Verildi!**`
  )
  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["cezalıver"],
  permLevel: 0
};

exports.help = {
  name: "cezalı-ver",
  description: "Birisini Cezalı Rolü Verirsiniz!",
  usage: "cezalı-ver <user>/id"
};
   