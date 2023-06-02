module.exports = {
    name: 'ping',
    category:'info',
    aliases:[],
    run:(client,message,args) =>{
        message.reply(`🏓 Pong! ⚽ \`${client.ws.ping} ms\``);
    }
}