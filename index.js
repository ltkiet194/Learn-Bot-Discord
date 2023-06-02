const { Client, GatewayIntentBits,Collection  } = require('discord.js');
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

client.commands = new Collection();
client.aliases = new Collection();
client.categories = new Collection();
['command', 'event'].forEach(handler => require(`./handlers/${handler}`)(client));

client.login(process.env.TOKEN);