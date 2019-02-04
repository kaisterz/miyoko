const discord = require("discord.js");
const botconfig = require("../botconfig.json")
const chalk = require("chalk")

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You do not have the permission to execute this command!")
  if (isNaN(args[0])) return message.reply("Invalid user ID!")
  if (!args[0]) return message.reply("Please provide a user to ban!")
  let reason = args.slice(1).join(" ")
  if (!reason) {
    const reason = "No reason provided."
  }
  if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("Please give me the permission `BAN_MEMBERS`")
  message.guild.ban(args[0], {
    reason: `${reason}`
  }).catch(err => {
    message.channel.send("An error has occured with the command. Try again or join the contact the developer .")
    console.log(chalk.red("[LOGS] " + err))
  }).then(m => bot.fetchUser(args[0]).then(u => message.channel.send(`:heavy_check_mark: **${u.tag} has been banned.**`)))
  message.delete()
}


module.exports.config = {
  name: "hackban",
  alias: ['forceban'],
  description: "Bans a user who is not in the guild forcefully.",
  usage: `${botconfig.prefix}hackban`,
  access: "Ban Members"
}