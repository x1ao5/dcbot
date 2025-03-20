const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return; // 忽略機器人自己的訊息

    try {
        await message.react('🤡'); // 這裡可以更換表情符號
    } catch (error) {
        console.error('無法添加表情符號:', error);
    }
});

client.login(process.env.TOKEN);
