const discord = require("discord.js")
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
  const search = args.join(" ")
  const role = message.guild.roles.filter(r => r.name.toLowerCase().startsWith(search[0].trim()) || r.name.startsWith(search[0].trim()))
  if (!role.first()) return message.reply("Role not found!")
  const embed = new discord.RichEmbed()
    .setTitle("Role Members | " + role.first().name)
    .setDescription(role.first().members.map(m => m))
    .setColor("#b032f1")
  message.channel.send(embed)
}


module.exports.config = {
  name: "members",
  description: "Displays the members within a given role.",
  usage: `${botconfig.prefix}members`,
  alias: [],
}