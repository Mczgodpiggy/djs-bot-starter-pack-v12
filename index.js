require("discord-reply");
const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "b!";

client.on("ready", () => {
  console.log(`${client.user.tag} is ready!`)
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (messsage.content.startsWith(prefix + "help")) {
    const hembed = new Discord.MessageEmbed()
    .setTitle(`${client.user.tag} commands`)
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())
    .setDescription(`[Support server](support_server_invite_url)\n[Website](website_url)\nDeveloper: **your_name**`)
    .addField(prefix + "help", "Sends this message")
    message.lineReply(hembed)
  } else if (message.content.startsWith(prefix + "ping")) {
    message.lineReply(`My ping is: ${client.ws.ping}ms!`)
  }
});

client.login("token")
