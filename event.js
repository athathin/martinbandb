const fs = require('fs')
const Martinz = require('discord.js')
const config = require('../config.json')




module.exports = (client) => {
 client.on('message', (message) => {fs
  const prefix = config['main_config'].prefix
  if (!message.content.startsWith(prefix) || message.author.bot) return

  const args = message.content.slice(prefix.length).trim().split(/ +/)
  const command = args.shift().toLowerCase()
  if (client.commands.get(command)) {
    client.commands.get(command).execute(client, message, args)
  }
})

}

