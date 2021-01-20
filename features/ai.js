const axios = require('axios').default
require('dotenv').config()
module.exports = client => {
    const channel = client.channels.cache.get('797778222602911774')
    client.on('message', async (message) => {
        if (message.channel.id == channel.id) {
            if (message.author.bot) return
            const result = axios.get(`https://api.snowflakedev.xyz/api/chatbot?name=Beel Bot&user=${message.author.id}&message=${message.content}`, {
                headers: {
                    "Authorization": process.env.apiToken
                }
            })
            message.channel.send((await result).data.message)
        }
    })
}