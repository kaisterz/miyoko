const discord = require("discord.js");
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
  var user = message.mentions.users.first() || message.guild.members.get(args[0]) || message.author
  var targetInvites = await message.guild.fetchInvites()
  var invitesUses = 0
  targetInvites.forEach(invite => {
    if (invite.inviter.id === user.id) {
      invitesUses += invite.uses
    }
  })
  var embed = new discord.RichEmbed()
    .addField('Member Invites:', invitesUses)
    .setColor('#b032f1')
    .setFooter(user.tag || user.user.tag)
    .setTimestamp()
  message.channel.send(embed)
}


module.exports.config = {
  name: "invites",
  alias: ["myinvites"],
  description: "Displays a user's invites.",
  usage: `${botconfig.prefix}invites`,
  access: "Members"
}