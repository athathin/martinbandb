const { apistart } = require('../../api.js')
const figlet = require('figlet') // ASCII text shit
const chalk = require('chalk') // colored console logs 
const Martinz = require('discord.js')
const config = require('../../config.json')
const { createConnection } = require('mysql')
const client = new Martinz.Client()





module.exports = () => {
 // Prepare the mysql connection
 let con = createConnection(config['mysql'])

 // Then we are going to connect to our MySQL database and we will test this on errors
 con.connect((err) => {
   if (err)
     return (
       console.log(err),
       console.log(
         'Make Sure your connected to a database,\nif you not the the bot will result in crashing.'
       )
     )
   console.log(`MySQL has been connected to ${config['mysql'].database}`)
 })

 client.on('guildCreate', (guild) => {
   console.log(`I have just joined ${guild}`)
   let guildID = guild.id
   con.query(
     `INSERT INTO guild_settings (guild_id, autobans, guild_owner) VALUES (${guildID}, 'no', ${guild.ownerID})`,
     (err, row, results) => {}
   )
 })

 client.on('guildDelete', (guild) => {
   console.log(`I have just left ${guild}`)
   let guildID = guild.id
   con.query(
     `DELETE FROM guild_settings WHERE guild_id = ${guildID}`,
     (err, row, results) => {}
   )
 })


 con.query(`SELECT COUNT(*) as total FROM bans`, (err, row) => {
                 client.user.setPresence({
                     activity: {
                         name: `${row[0].total} bans on ${client.guilds.cache.size} servers!`,
                         type: config.presence.type
                     },
                     status: config.presence.status
                 })
             });
   console.log(
     `By ML Modifications`
   )

 client.on('ready', (ready, guild) => {
   figlet('MLBanDB', function(err, data) {
     if (err) {
         console.log('Something went wrong...');
         console.dir(err);
         return;
     }
 });





   console.log(
     `\x1b[36m ${String.raw`https://mlmmodifications.shop`} \x1b[0m`
   )
   console.log(`\x1b[36m ${String.raw` `} \x1b[0m`)

   console.log(`Built by ML Modifications`)

 con.query(`SELECT COUNT(*) as total FROM bans`, (err, row) => {
                 client.user.setPresence({
                     activity: {
                         name: `${row[0].total} bans on ${client.guilds.cache.size} servers!`,
                         type: config.presence.type
                     },
                     status: config.presence.status
                 })
             });

            
           })


 // Ready event
 client.on('ready', () => {
   // Log when bot is ready
   console.log(`${client.user.tag} is online!`)
 })

 client.on('ready', (client) => {
     apistart(client)
 })
}







