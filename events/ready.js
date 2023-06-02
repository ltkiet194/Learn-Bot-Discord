module.exports = (client) => {
    console.log('Bot is ready!');
    client.user.setPresence({ activities: [{ name: 'Playing ASS ASS IN'}], status: 'online'} );
}