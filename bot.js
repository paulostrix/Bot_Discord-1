const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log(`Bot Iniciado, com ${client.user.size}, em ${client.channels.size} canais, em ${client.guilds.size} servidores`)
    client.user.setGame("COMENDO A SUA MAE")
});

client.on("guildCreate", guild => {
    console.log("O bot entrou no servidor:" + guild.name + guild.id + "população: " + guild.memberCount + " membros")
    client.user.setActivity(`Servindo ${client.guilds.size} servers`)
})
client.on("guildDelete", guild => {
    console.log("O bot saiu no servidor:" + guild.name + guild.id + "população: " + guild.memberCount + " membros")
    client.user.setActivity(`Servindo ${client.guilds.size} servers`)
})

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase()
    console.log(comando)
    if(comando === "ping"){
        const m = await message.channel.send("Ping?");
        m.edit(`pong! A latência do bot é ${m.createdTimestamp - message.createdTimestamp} ms. A latência da API é ${Math.round(client.ping)}ms.`)
    }
})

client.login(config.token)