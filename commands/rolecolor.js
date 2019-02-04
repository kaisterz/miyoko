const discord = require("discord.js")
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("You do not have the permission to execute this command!")
  if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.reply("Please give me the permission `MANAGE_ROLES`")
  const search = args.join(" ").split("#")
  const role = message.guild.roles.filter(r => r.name.toLowerCase().includes(search[0].trim()) || r.name.includes(search[0].trim()))
  if (!role.first()) return message.reply("Role not found!")
  role.first().edit({
    color: `#${search[1]}`
  })
  message.channel.send(`:heavy_check_mark: **${role.first().name}'s color was set to #${search[1]}!**`)
}

module.exports.config = {
  name: "rolecolor",
  description: "Sets a roles color.",
  usage: `${botconfig.prefix}rolecolor`,
  access: "Manage Roles",
  alias: ["rcolor", "setrolecolor"]
}