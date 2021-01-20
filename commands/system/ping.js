const DiscordJS = require('discord.js')
module.exports = {
    aliases: ['p'], // Optional
    category: "System",
    description: "Shows the latency of the bot!",
    callback: ({ message, args, text, client}) => {
        message.channel.send('Testing ping...').then(m => {
            m.edit(
                new DiscordJS.MessageEmbed()
                .setTitle('Pong!')
                .setDescription(`WebSocket: **${m.createdAt - message.createdAt}**ms\nRound Trip: **${client.ws.ping}**ms`)
                .setColor('GREEN')
            )
            m.edit('\u200b')
        })
    }
}
