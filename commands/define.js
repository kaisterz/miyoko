const discord = require("discord.js")
const botconfig = require("../botconfig.json")
const {
  define
} = require("owlbot-dictionary")

module.exports.run = async (bot, message, args) => {
  if (!args[0]) return message.reply("Give me something to define!")
  define(args[0]).then(def => {
    var r = def[0]
    if (!r.defenition) return message.reply("No definition found!")
    const embed = new discord.RichEmbed()
      .setTitle(args[0])
      .setColor("#b032f1")
      .addField("Type", r.type.charAt(0).toUpperCase() + r.type.substr(1))
      .addField("Definition", r.defenition.charAt(0).toUpperCase() + r.defenition.substr(1))
      .addField("Example", r.example.charAt(0).toUpperCase() + r.example.substr(1))
    message.channel.send(embed)
  })
}

module.exports.config = {
  name: "define",
  alias: ["definition"],
  description: "Defines a word.",
  usage: `${botconfig.prefix}define`
}