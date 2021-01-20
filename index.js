const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
require('dotenv').config()

const client = new DiscordJS.Client({
  partials: ['MESSAGE', 'REACTION'],
})

client.on('ready', () => {
  client.user.setActivity({
    name: `the great Beel Battle!`,
    type: "COMPETING"
  })
  new WOKCommands(client, {
    commandsDir: 'commands',
    featureDir: 'features',
    showWarns: false,
  })
    .setDefaultPrefix('-')
    .setBotOwner(['683879319558291539', '605338346650206218'])
    .setColor('GREEN')
    .setDisplayName('Beel')
    .setCategorySettings([
      {
        name: "System",
        emoji: "💻",
      }, {
        name: "Utility",
        emoji: "🔨",
      }
    ])  
})

client.login(process.env.token)