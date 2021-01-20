const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const kanal = ayarlar.kanal;
const fs = require("fs");
require("./util/eventLoader")(client);
const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const log = message => {
  console.log(` => { ${message} } `);
  
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`AKTİF: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

////////////////////////

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  return permlvl;
};

client.login(process.env.token);


client.on("ready", () => {
  client.user.setPresence({
    game: { name: `Majeste Bot List `, type: "WATCHING" },
    status: "online"
  });
});

client.on("guildMemberAdd", member => {
  let tag = ayarlar.tag;
  member.setNickname(`${tag}  ${member.user.username}`);
});

client.on("message", message => {
  let kanal2 = ayarlar.kanalengel2;
  if (message.channel.id == kanal2) {
    if (message.author.id == message.client.user.id) return;

    message.delete(1 * 500);
  }
});

client.on("message", (message, member) => {
  let kanal1 = ayarlar.kanalengel;
  if (message.channel.id == kanal1) {
    if (message.author.id == message.client.user.id) return;

    message.delete(1 * 500);
  }
});
client.on(`guildMemberAdd`, async member => {

var maze = new Discord.RichEmbed()
///
.setColor("RANDOM")

.setTitle("<a:maden:799217139977289738> Sunucuya yeni bir üye katıldı <a:maden:799217139977289738>")

.setThumbnail(member.user.avatarURL)

.setDescription(":bildirim: Sunucuya hoşgeldin "+ member +", seninle beraber "+ member.guild.memberCount+" kişiye ulaştık. ")

.addField(`<a:ask:789974740134920212> Üye ID:`, `${member.id}`, true)

.addField(`<a:AyarGif:799217218117173278> Üye Adı`, `${member}`, true)

client.channels.get("799674473048571927").send(maze) 

});
///otoROL
setInterval(() => {
client.channels.get("799673894142476298").send('Yardım İçin Destek Kanallarından Yetkilileri Etiketleyebilirsiniz')
}, 3600000)
///
client.on('ready', ()=>{
client.channels.get('799681052648931388').join()
})
///Deneme
client.on('message', msg => {
  if (msg.channel.id == '800475166320099328') {
     msg.react('♥️');
     console.log('800475166320099328')
  }
});
///aleykümselam

client.on("message", message => {
    if(message.content.toLowerCase() == "sa") 
    return message.channel.send(`${message.author}, Aleyküm Selam.`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "selam") 
    return message.channel.send(`${message.author}, Selam hoşgeldin.`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "merhaba") 
    return message.channel.send(`${message.author}, Merhaba hoşgeldin.`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "s.a") 
    return message.channel.send(`${message.author}, Aleyküm Selam.`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "mrb") 
    return message.channel.send(`${message.author}, Aleyküm Selam.`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "slm") 
    return message.channel.send(`${message.author}, Selam hoşgeldin.`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "sea")
    return message.channel.send(`${message.author}, Selam hoşgeldin.`)
});
///
client.on("message", async msg => { 
const as = require('./ayarlar.json')
const dcskelime = [client.user.id, client.user.username, "<@"+client.user.id+">"]; 
if (dcskelime.some(dcss => msg.content.includes(dcss))) {
msg.reply("Prefixim: "+as.prefix) 
}})  
///
//DCS
client.on("message", async message => {
  if(message.author.id === client.user.id) return;
  if(message.guild) return;
 //DCS 
client.channels.get('798963783522320405').send(new Discord.RichEmbed().setAuthor('Yeni Bir Mesajım Var').setFooter('Dm Log Sistemi').setDescription(`Gönderen kişi:   ${message.author.tag}`).setTimestamp().setThumbnail(client.user.avatarURL).addField("Mesajı",
message.content).setColor("GOLD"))//DCS!
})
///sayac.js
const db = require("quick.db")

client.on("message", async message => {
  if (!message.guild) return;

  if (db.has(`sayac_${message.guild.id}`) === true) {
    if (db.fetch(`sayac_${message.guild.id}`) <= message.guild.members.size) {
      const embed = new Discord.RichEmbed()
        .setTitle(`Tebrikler ${message.guild.name}!`)
        .setDescription(`Başarıyla \`${db.fetch(`sayac_${message.guild.id}`)}\` kullanıcıya ulaştık! Sayaç sıfırlandı!`)
        .setColor("RANDOM");
      message.channel.send(embed);
      message.guild.owner.send(embed);
      db.delete(`sayac_${message.guild.id}`);
    }
  }
});
client.on("guildMemberRemove", async member => {
  const channel = db.fetch(`sKanal_${member.guild.id}`);
  if (db.has(`sayac_${member.guild.id}`) == false) return;
  if (db.has(`sKanal_${member.guild.id}`) == false) return;

    member.guild.channels.get(channel).send(`**${member.user.tag}** Sunucudan ayrılmanla \`${db.fetch(`sayac_${member.guild.id}`)}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.memberCount}\` üye kaldı <a:elmas:752296630115369010>`);
});
client.on("guildMemberAdd", async member => {
  const channel = db.fetch(`sKanal_${member.guild.id}`);
  if (db.has(`sayac_${member.guild.id}`) == false) return;
  if (db.has(`sKanal_${member.guild.id}`) == false) return;

    member.guild.channels.get(channel).send(`**${member.user.tag}** Sunucuya Katıldı  \`${db.fetch(`sayac_${member.guild.id}`)}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.memberCount}\` üye kaldı <a:elmas:752296630115369010>`);
});
///sunucutanıt
client.on("ready", async () => {
  let csdb = require("quick.db")
  setInterval(() => {
    
  client.guilds.map(cs => {
    
  let csv = csdb.get("sunucutanit."+cs.id)
    if(csv){
      
      let time = Date.now() - csv.zaman
      let sure = csv.sure
      
      if(time >= sure){
        db.delete("sunucutanit."+cs.id)
      }
    }
  })
  }, 300000)
}) 