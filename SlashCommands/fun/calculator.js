const {Command} = require(`reconlx`)

module.exports = new Command({
  name: `calculator`,
  description: `calculate a number or numbers and sending the answer!`,
  options: [
    {
      name: `question`,
      description: `math question or problem to solve`,
      type: "STRING",
      required: true
    }
  ],
  run: async({interaction}) =>{
    const message = interaction.options.getString("question")

    if(message.includes(`+`) || message.includes(`-`) || message.includes(`*`) || message.includes(`/`)){
      try{
      const answer = await eval(message)
      interaction.followUp({content: `**Calculator+ response**:\n\`\`\`${message}\`\`\` = ${answer}`})
      }catch(e){
        interaction.followUp({content: `**Errors**: \`${e}\``})
      }
    }else{
      interaction.followUp({content: `Can't calculate this problem because the problem is missing \`+ , - , * , /\`.`})
    }
  }
})