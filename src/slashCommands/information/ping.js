const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'ping',
    description: '🏓Check my ping!',
    run: async (client, interaction) => {
      let pembed = new EmbedBuilder()
		  .setTitle("Pong!")
      .setColor('#2F3136')
      .setThumbnail('https://media.discordapp.net/attachments/1220163567219900486/1222308424583221290/download.jpg?ex=6615be6d&is=6603496d&hm=5b8c5772ccdadbb8d94295741f420cf0a74dbaba9d9e9cdaa965a44c74b841fe&=&format=webp')
		  .addFields({name: '**Latency**', value: `\`\`\`ini\n[ ${Date.now() - interaction.createdTimestamp}ms ]\n\`\`\``, inline: true},
			     {name: '**API Latency**', value: `\`\`\`ini\n[ ${Math.round(client.ws.ping)}ms ]\n\`\`\``, inline: true})
		  .setTimestamp()
      .setFooter({
        text: `©️ GoodBot`, 
        iconURL: ('https://media.discordapp.net/attachments/1220163567219900486/1222308424583221290/download.jpg?ex=6615be6d&is=6603496d&hm=5b8c5772ccdadbb8d94295741f420cf0a74dbaba9d9e9cdaa965a44c74b841fe&=&format=webp')
    })
        interaction.reply({
          embeds: [pembed]
        });
    },
};