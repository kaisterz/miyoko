const discord = require("discord.js");
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
    message.channel.send("Ping?").then(m => m.edit(`Pong! API Ping: \`${Math.floor(bot.ping)}\`ms Bot Ping: \`${m.createdTimestamp - message.createdTimestamp}\`ms`))
}


module.exports.config = {
  name: "ping",
  alias: [],
  description: "Returns bot latency.",
  usage: `${botconfig.prefix}ping`
}