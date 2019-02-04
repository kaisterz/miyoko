const discord = require("discord.js");
const bot = new discord.Client({disableEveryone: true});

const fs = require("fs");
const botconfig = require("./botconfig.json");
require("./util/eventHandler")(bot)

bot.commands = new discord.Collection();
bot.alias = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err)
  let jsfile = files.filter(f => f.split(".").pop() === 'js')
  if(jsfile.length <= 0) {
    return console.log("[LOGS] Couldn't find commands!");
  }

  jsfile.forEach((f, i) => {
    let pull = require(`./commands/${f}`)
    bot.commands.set(pull.config.name, pull);
    pull.config.alias.forEach(alias => {
      bot.alias.set(alias, pull.config.name)
    })
  })
})

bot.on("message", (message) => {
  if(message.channel.type === 'dm') return;
  if(message.author.bot) return;

  let prefix = botconfig.prefix
  let messageArray = message.content.split(" ")
  let cmd = messageArray[0]
  let args = messageArray.slice(1)

  if(!message.content.startsWith(prefix)) return;
  let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.alias.get(cmd.slice(prefix.length)))
  if(commandfile) commandfile.run(bot,message,args)
});


bot.login(botconfig.token)
