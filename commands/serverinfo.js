const discord = require("discord.js")
const moment = require("moment")
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
  try {
    if (message.guild.features.includes("VIP_REGIONS")) {
      var vip = "✅"
    } else {
      var vip = "❌"
    }
    if (message.guild.features.includes("VANITY_URL")) {
      var vanity = "✅"
    } else {
      var vanity = "❌"
    }
    if (message.guild.features.includes("SPLASH_SCREEN")) {
      var splash = "✅"
    } else {
      var splash = "❌"
    }
    if (message.guild.features.includes("MORE_EMOJIS")) {
      var moreEmojis = "✅"
    } else {
      var moreEmojis = "❌"
    }
    if (message.guild.features.includes("VERIFIED")) {
      var verified = "✅"
    } else {
      var verified = "❌"
    }
  } catch (e) {
    message.channel.send("There was an error executing the command. Please try again!")
  }
  const embed = new discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setThumbnail(message.guild.iconURL)
    .setColor("#b032f1")
    .addField("Server Name", message.guild.name, true)
    .addField("Server ID", message.guild.id, true)
    .addField("Server Roles", message.guild.roles.size, true)
    .addField("Server Creation", moment(message.guild.createdAt.toString()).format("LLLL"), true)
    .addField("Member Count", message.guild.memberCount, true)
    .addField("Bot Count", message.guild.members.filter(m => m.user.bot).size, true)
    .addField("Human Count", message.guild.members.filter(m => !m.user.bot).size, true)
    .addField("Server Owner", message.guild.owner.user.tag, true)
    .addField("Server Roles (Max. 30 Displayed)", message.guild.roles.array().slice(0, 30).join(", ") || "None")
    .addField("Server Emojis (Max. 30 Displayed)", message.guild.emojis.array().slice(0, 30).join(" ") || "None")
    .addField("Special Features", `VIP Voice ${vip}\nVanity URL ${vanity}\nSplash Screen ${splash}\nMore Emojis ${moreEmojis}\nVerified ${verified}`)
  if (!message.guild.iconURL) embed.setFooter(`${message.guild.owner.user.username} | Server has no icon!`, message.guild.owner.user.displayAvatarURL)
  else embed.setFooter(`${message.guild.owner.user.username}`, message.guild.owner.user.displayAvatarURL)
  message.channel.send(embed)
}

module.exports.config = {
  name: "serverinfo",
  alias: ["si"],
  description: "Displays information about the current guild.",
  usage: `${botconfig.prefix}serverinfo`
}