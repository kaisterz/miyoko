const discord = require("discord.js")
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
    const embed = new discord.RichEmbed()
    .setTitle("Invite Akari")
    .setDescription("You can use [this link]\(https://discordapp.com/oauth2/authorize?scope=bot&client_id=539635859679477780&permissions=8\) to invite me!")
    .setColor("#b032f1")
    message.channel.send(embed)
}

module.exports.config = {
    name: "invite",
    alias: [],
    description: "Provides an invite to the bot.",
    usage: `${botconfig.prefix}invite`
}