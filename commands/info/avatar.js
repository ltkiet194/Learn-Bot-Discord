const { EmbedBuilder } = require('discord.js');
module.exports = {
    name: 'ping',
    category:'info',
    aliases:[],
    run:(client,message,args) =>{
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        const avatarURL = member.displayAvatarURL({ format: 'png', size: 4096, dynamic: true });
        const embed = new EmbedBuilder()
            .setImage(avatarURL)
            .setTitle(`Avatar của ${member.displayName}`);
        message.reply({embeds:[embed]});
    }
}