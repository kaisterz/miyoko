const discord = require("discord.js")
const botconfig = require("../botconfig.json")

module.exports = bot => {
  console.log("[LOGS] Bot logged in as " + bot.user.username);
  bot.user.setActivity(`for ${botconfig.prefix}help`, {type: "WATCHING"});
}
