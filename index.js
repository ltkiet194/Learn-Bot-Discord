const { Client, GatewayIntentBits, MessageActivityType , EmbedBuilder ,Collection  } = require('discord.js');
require('dotenv').config();
const { MessageEmbed } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});
client.command = new Collection();
client.aliases = new Collection();
client.categories = new Collection();

['command','event'].forEach(handler => require(`./handlers/${handler}`))

client.on('ready', () => {
    console.log('Bot is Ready!');
    client.user.setPresence({ activities: [{ name: 'PUBG Mobike' }], status: 'online' })
});


client.on('messageCreate', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(process.env.PREFIX)) return;
    const args = message.content.slice(process.env.PREFIX.length).trim().split(' ')
    const command = args.shift().toLowerCase();
    if (command === 'ping') {

    }
    else if (command === 'say') {

    }
    else if (command === 'avatar') {

    }

    console.log(message.content);
});

client.login(process.env.TOKEN);