const discord = require("discord.js")
const moment = require("moment")
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
    const id = args[0]
    if (!id) {
        const mem = message.author
        const embed = new discord.RichEmbed()
            .setAuthor(mem.tag, mem.displayAvatarURL)
            .setTitle("User Info")
            .setColor("#b032f1")
            .setThumbnail(mem.displayAvatarURL)
            .addField("User Tag", mem.tag, true)
            .addField("User ID", mem.id, true)
            .addField("User Roles", message.member.roles.array().join(", "), true)
            .addField("User Creation", moment(mem.createdAt.toString()).format("LLLL"))
            .addField("User Joined", moment(message.member.joinedAt.toString()).format("LLLL"))
        message.channel.send(embed)
        return;
    }
    if (message.guild.members.get(id)) {
        const oof = message.guild.members.get(id)
        if (!oof) return message.reply(":x: User not found!")
        const mem = oof.user
        const embed = new discord.RichEmbed()
            .setAuthor(mem.tag, mem.displayAvatarURL)
            .setTitle("User Info")
            .setColor("#b032f1")
            .setThumbnail(mem.displayAvatarURL)
            .addField("User Tag", mem.tag, true)
            .addField("User ID", mem.id, true)
            .addField("User Roles", oof.roles.array().join(", "), true)
            .addField("User Creation", moment(mem.createdAt).format("LLLL"))
            .addField("User Joined", moment(oof.joinedAt.toString()).format("LLLL"))
        if (mem.bot) embed.setFooter("User is a bot!")
        message.channel.send(embed)
        return;
    }
    if (message.mentions.users.first()) {
        const oof = message.mentions.users.first()
        const mem = message.guild.members.find(`id`, oof.id)
        if (!mem) return message.channel.send(":x: User not found!")
        const embed = new discord.RichEmbed()
            .setAuthor(oof.tag, oof.displayAvatarURL)
            .setTitle("User Info")
            .setColor("#b032f1")
            .setThumbnail(oof.displayAvatarURL)
            .addField("User Tag", oof.tag, true)
            .addField("User ID", oof.id, true)
            .addField("User Roles", mem.roles.array().join(", "), true)
            .addField("User Creation", moment(oof.createdAt).format("LLLL"))
            .addField("User Joined", moment(mem.joinedAt).format("LLLL"))
        message.channel.send(embed)
        return;
    }
}

module.exports.config = {
    name: "userinfo",
    alias: ["ui"],
    description: "Displays information about a mentioned user, provided ID, or yourself.",
    usage: `${botconfig.prefix}userinfo`
}