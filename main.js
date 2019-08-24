const Discord = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Je suis prêt.");
});

client.on("message", msg => {
  // bk
  if (msg.content.startsWith(`${PREFIX}Salut`)) {
    msg.reply("Salut!");
  }
});

client.login(TOKEN);
