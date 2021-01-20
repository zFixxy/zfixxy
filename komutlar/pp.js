const Discord = require('discord.js');

exports.run = (client, message, args) => {

    if(message.author.id !== '503266973484843009') return;
    let ayarlanan = args[0]
    client.user.setAvatar(ayarlanan)   
  };

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['pp', 'pp-ayarla'],
  permLevel: 2
};

exports.help = {
  name: 'pp',
  description: 'Botun avatarını ayarlar. Sen yapamazsın :D',
  usage: 'pp '
};