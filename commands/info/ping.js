const { Message, Client } = require("discord.js");

module.exports = {
    name: "ping",
    aliases: ['p'],
    description: `Send the message ping.`,
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        message.channel.send(`**pong! 🏓\n${client.ws.ping}ms latency!**`);
    },
};
