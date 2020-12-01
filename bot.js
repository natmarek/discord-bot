require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()

const BOT_PREFIX = "!"
const MOD_ME_COMMAND = "mod-me"

client.on('ready', () => {
    console.log('Bot is ready to go!!!!!');
})


client.on('message', msg => {
    if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`)
    modUser(msg.member)

    if(msg.content === "hi") {
        msg.react("❤️")
    }
    // msg.member.roles.add("")
    // msg.reply("Pong!")
})

const modUser = (member) =>{
    member.roles.add("783434015381782558")
}


client.login(process.env.BOT_TOKEN)