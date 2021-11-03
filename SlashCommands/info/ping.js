const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "ping",
    description: "returns websocket ping",
    type: 'CHAT_INPUT',
    run: async ({client, interaction}) => {
        interaction.followUp({ content: `**pong! 🏓\n${client.ws.ping}ms latency!**` });
    },
};
