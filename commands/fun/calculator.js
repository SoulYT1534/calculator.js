const { Message, Client } = require("discord.js");

module.exports = {
    name: "calculator",
    aliases: ['calc', 'solve', 'calculate'],
    description: `Send the answers of the math problem from the args string.`,
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async ({message, args}) => {
        if(args.join(" ").includes(`+`) || args.join(" ").includes(`-`) || args.join(" ").includes(`*`) || args.join(" ").includes(`/`)){
      try{
      const answer = await eval(args.join(" "))
      message.reply({content: `**Calculator+ response**:\n\`\`\`${args}\`\`\` = ${answer}`, allowedMentions: {repliedUser: false}})
      }catch(e){
        message.reply({content: `**Errors**: \`${e}\``})
      }
    }else{
      message.reply({content: `Can't calculate this problem because the problem is missing \`+ , - , * , /\`.`})
    }
    },
};
