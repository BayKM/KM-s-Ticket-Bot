const Discord = require('discord.js');
const data = require('quick.db')

exports.run = async (client, message, args) => { 
const prefix = await data.fetch(`prefix.${message.guild.id}`) || client.ayarlar.prefix;
  
if(!args[0]) {
  
const embed = new Discord.MessageEmbed()
.setColor('GREEN')
.addField(`Yardım Menüsü`, `\`${prefix}yardım komutlar\` - Komutlar hakkında bilgi verir.
\`${prefix}yardım setup\` - Kurulum hakkında bilgi verir.
\`${prefix}yardım sss\` - Sıkça sorulan sorular.`)

message.channel.send(embed)  }

if(args[0] === 'komutlar') {
  
const embed = new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription(`() = Tercih.
[] = Gerekli.`)
.addField(`==================================
Ticket Commands
==================================
\`+ekle [Etiket] (kanal)\``, `*Açıklama: Ticket a başka birisini/rolü eklersiniz.
Ekstra kullanım: Bulunmuyor.*`)

.addField(`\`+sil [Etiket] (kanal)\``, `*Açıklama: Ticket a ekli birisini/rolü silersiniz.
Ekstra kullanım: +kaldır*`)

.addField(`\`+kapat [Etiket] (kanal)\``, `*Açıklama: Ticket ı kapatırsınız.
Ekstra kullanım: Bulunmuyor.*`)

.addField(`\`+aç [Etiket] (kanal)\``, `*Açıklama: Ticket ı açarsınız.
Ekstra kullanım: Bulunmuyor.*`)

.addField(`\`+bilet-sil \``, `*Açıklama: Ticket ı silersiniz.
Ekstra kullanım: Bulunmuyor.*`)

.addField(`\`+ping [gönder])\``, `*Açıklama: Botun pingini gösterir.
Ekstra kullanım: Bulunmuyor.*`)

.addField(`\`+ticket-kanal [ayarla/sıfırla] (kanal)\``, `*Açıklama: Ticket mesajının kanalını ayarlarsınız.
Ekstra kullanım: Bulunmuyor.*`)

.addField(`\`+ticket [gönder])\``, `*Açıklama: Ticket mesajını yollar.
Ekstra kullanım: Bulunmuyor.*`)
message.channel.send(embed)  
}  


if(args[0] === 'sss') {
 
const embed = new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription(`Sıkça Sorulan Sorular = sss`)
.addField(`==================================
Ticket Commands
==================================`)

.addField(`\`Soru 1 : Bu bot nedir ?\``, `*Cevap: Bu bot bir "ticket botu" dur , sadece bu bot Türkçe'dir.*`)

.addField(`\`Soru 2 : Bu botun yapımcısı kimdir ?\``, `*Cevap: Bu botun yapımcısı <@748530212169449565>(Mr. KM) dir .*`)

.addField(`\`Soru 3 : Bu bot çalıntı mı ?\``, `*Cevap: Bu bot çalınıt değildir ama orjinal de değildir biz buna "esinleme" diyoruz , orjinal ticket bot benim değildir.*`)
 message.channel.send(embed)  
}  
 
if(args[0] === 'setup') {
  
const embed = new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription(`Setup = Kurulum`)
.addField(`==================================
Ticket Commands
==================================`)

.addField(`\`Botu sunucuya eklemek için linke tıkla (Bu link 0 perm seviyesidir yani en alt yetki)\``, `0 perm link : https://discord.com/api/oauth2/authorize?client_id=828218305578795008&permissions=0&scope=bot`)
.addField(`\`Botu sunucuya eklemek için linke tıkla (Bu link 8 perm yani en üst yetki seviyesidir)\`` , `8 perm link : https://discord.com/api/oauth2/authorize?client_id=828218305578795008&permissions=8&scope=bot `)




message.channel.send(embed)
}
  
    
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["help","yardım"],
  permLevel: 0
}
 
exports.help = { 
  name: 'yardım'
};