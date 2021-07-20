const Martinz = require('discord.js')
const config = require('./config.json')
const { createConnection } = require('mysql')
const fs = require('fs')
const client = new Martinz.Client()
const { apistart } = require('./api.js')
const figlet = require('figlet') // ASCII text shit
const chalk = require('chalk') // colored console logs 



  
client.commands = new Martinz.Collection();
client.events = new Martinz.Collection();

['command', 'event'].forEach(handler =>{
  require(`./handlers/${handler}`)(client, Martinz);
})





client.login(config['main_config'].token)
