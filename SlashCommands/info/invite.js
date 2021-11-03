const { Client, CommandInteraction, MessageActionRow, MessageButton } = require("discord.js");
const {Command} = require(`reconlx`)
module.exports = new Command({
    name: "invite",
    description: "returns bot's invite link",
    type: 'CHAT_INPUT',
    run: async ({client, interaction}) => {
      		const row = new MessageActionRow()
			.addComponents(
				button = new MessageButton()
	.setLabel('Invite')
	.setStyle('LINK')
  .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=117824&scope=bot%20applications.commands`)
			);
        interaction.followUp({ embeds: [embed = {
          title: `Invite me!`,
          timestamp: new Date(),
          image: {url:client.user.avatarURL()},
          footer: {text: interaction.user.tag, iconURL: interaction.user.avatarURL()},
          color: `#BFBFBF`
        }], components: [row] });
    },
})
