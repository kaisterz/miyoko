const discord = require("discord.js");
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
  if (message.author.id !== botconfig.ownerid) return message.reply("Only the developer can use this command.")
  const result = eval(args.join(" "))
  message.channel.send("Result:\n" + result)
}


module.exports.config = {
  name: "eval",
  alias: ["compile"],
  description: "Evaluates javascript.",
  usage: `${botconfig.prefix}eval`,
  access: "Bot Developer"
}