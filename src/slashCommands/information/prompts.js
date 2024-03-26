const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    name: 'prompts',
    description: 'some helpful prompts for you to get started',
    run: async (client, interaction) => {

        const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
        .setLabel("Visit for more Prompts")
        .setStyle(ButtonStyle.Link)
        .setURL("https://discord.com/channels/1210919152051687476/1217646791714144327")
        .setEmoji('1089552783339954246'),)  

      let pembed = new EmbedBuilder()
      .setTitle("Here are some trending prompts")
      .setColor('#2F3136')
      .setThumbnail('https://media.discordapp.net/attachments/1220163567219900486/1222308424583221290/download.jpg?ex=6615be6d&is=6603496d&hm=5b8c5772ccdadbb8d94295741f420cf0a74dbaba9d9e9cdaa965a44c74b841fe&=&format=webp')
	  .setDescription(`
      <:next:1221932295129137272> mdjrny-v4 style, magic spell book sitting on a table in the catacombs, hypermaximalist, insanely detailed and intricate, octane render, unreal engine, 8k, by greg rutkowski and Peter Mohrbacher and magali villeneuve\n\n\
      <:next:1221932295129137272> mdjrny-v4 style, photo of a gorgeous blonde female in the style of stefan kostic, realistic, half body shot, sharp focus, 8 k high definition, insanely detailed, intricate, elegant, art by stanley lau and artgerm, extreme blur cherry blossoms background\n\n\
      <:next:1221932295129137272> mdjrny-v4 style, japanese style shrine on top of a misty mountain overgrown, hyper realistic, lush gnarly plants, 8 k, denoised, by greg rutkowski, tom bagshaw, james gurney cinematic lighting\n\n\
      <:next:1221932295129137272> mdjrny-v4 style, valley, fairytale treehouse village covered,, matte painting, highly detailed, dynamic lighting, cinematic, realism, realistic, photo real, sunset,detailed, high contrast, denoised, centered, michael whelan`)  
      .setFooter({
        text: `©️ GoodBot`, 
        iconURL: ('https://media.discordapp.net/attachments/1220163567219900486/1222308424583221290/download.jpg?ex=6615be6d&is=6603496d&hm=5b8c5772ccdadbb8d94295741f420cf0a74dbaba9d9e9cdaa965a44c74b841fe&=&format=webp')
    })
        interaction.reply({
          embeds: [pembed], components: [row] });
    },
};
