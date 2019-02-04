const discord = require("discord.js")
const moment = require("moment")
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
  const id = args[0]
  if (!id) return message.reply("Please provide a user ID to look up!")
  if (isNaN(id)) return message.reply("Please enter a valid user ID!")
  bot.fetchUser(id).then(u => {
    const embed = new discord.RichEmbed()
      .setTitle("User Lookup 🔎")
      .setThumbnail(u.displayAvatarURL)
      .setColor("#b032f1")
      .addField("User Tag | User ID", u.tag + " | " + u.id)
      .addField("Account Creation Date", moment(u.createdAt.toString()).format("LLLL"))
    if (message.guild.members.get(id)) {
      embed.addField("User Join Date", moment(u.member.joinedAt().toString()).format("LLLL"))
      embed.addField("User Roles", u.roles.join(", "))
    }
    message.channel.send(embed)
  })

}

module.exports.config = {
  name: "search",
  alias: ["lookup"],
  description: "Looks up information about a user.",
  usage: `${botconfig.prefix}search`
}