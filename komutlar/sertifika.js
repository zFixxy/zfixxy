const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = function(client, message, args) {
  let botisim = args[0];

  let kanal = ayarlar.sertifikaKANAL;
  let log = ayarlar.sertifikaLOG;

  if (message.channel.id !== kanal)
    return message.channel
      .send(`Bu komutu sadece <#${kanal}> kanalında kullanabilirsin.`)
      .then(msg => msg.delete(5000));
  if (message.channel.id == kanal) {
    if (!botisim)
      return message.channel
        .send(`Sertifika başvurusu yapacağın botun ID'sini belirtmelisin.`)
        .then(msg => msg.delete(5000));

    let embed2 = new Discord.RichEmbed()
      .setColor("#ffff00")

      .setDescription(
        `>  <a:gifshare_ykleniyor:793581552855810069>` +
          `<@${message.author.id}> adlı kullanıcı <@${botisim}> adlı bota sertifika başvurusu yaptı.`
      );
    client.channels.get(log).send(embed2);

    message.channel
      .send(
        `<a:gifshare_ykleniyor:793581552855810069>__**Sertifika isteğiniz alındı.**__`
      )
      .then(msg => msg.delete(3000));
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sertifika-ekle"],
  permLevel: 0
};

exports.help = {
  name: "sertifika",
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: "botekle <botid> <prefix>"
};
