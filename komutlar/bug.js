const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => { //dcs ekibi
let bug = args.join(" ").slice(0);
let user = message.author.username;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
let channel = bot.channels.get("798963783522320405")

let embed = new Discord.RichEmbed()
.setTitle("Report")
.setThumbnail("https://images-ext-2.discordapp.net/external/UGQzXwvxKb75fC7RgGXo3XAKcxbmPFttPgGy1Fc8TY8/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/797045640878227456/302e62348287430c5af4def9c3e45896.png?width=427&height=427")
.addField("Bug", bug)
.addField("Report Eden", user, true)
.addField("Sunucu", guild, true)
.addField("Sunucu ID", guildid, true)
.addField("Kanal", kanal, true)
.setColor("RED")

message.channel.send("**Bug Report Başarı İle İletildi.**")
channel.send(embed).then(i => i.react("⏳"))

  

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'bug-bildir'
  //dcs ekibi
}