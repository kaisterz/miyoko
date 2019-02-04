const discord = require("discord.js")
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
    message.channel.send("Test is :ok_hand:")
}

module.exports.config = {
    name: "test",
    alias: [],
    description: "A test command.",
    usage: `${botconfig.prefix}test`
}