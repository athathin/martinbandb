const fs = require('fs')
const Martinz = require('discord.js')
const config = require('../config.json')




module.exports = (client) => {
client.commands = new Martinz.Collection()
const commandFiles = fs 
.readdirSync('./commands').filter((file) => file.endsWith('.js')) 
  for (const file of commandFiles) {const command = require(`../commands/${file}`)
  client.commands.set(command.name, command)
}
}
