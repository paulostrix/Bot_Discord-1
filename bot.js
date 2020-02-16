const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log(`Bot Iniciado, com ${client.user.size}, em ${client.channels.size} canais, em ${client.guilds.size} servidores`)
    client.user.setGame("COMENDO A SUA MAE")
});

client.on("guildCreate", guild => {
    console.log("O bot entrou nos servidor:" + guild.name + guild.id + "população: " + guild.memberCount + " membros")
})

client.on("message", async message => {
   
})

client.login(config.token)