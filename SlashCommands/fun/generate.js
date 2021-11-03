const {Command} = require(`reconlx`)
const {MessageAttachment} = require(`discord.js`)
const {generate, generateArray} = require(`node.js_generator-package`)
module.exports = new Command({
  name: `generate`,
  description: `generate number(s) / randomize number(s).`,
  options: [
    {
      name: `number`,
      description: `send your number or numbers to generate.`,
      type: "STRING",
      required: true,
    }
  ],
  run: async({interaction, args}) =>{
    var message = interaction.options.getString(`number`)
    if(message.length > 1){
     message = message.split(" ")
     return interaction.followUp(`${generateArray(message).data}`)
    }else{
      return interaction.followUp(`${generate(message).data}`)
    }
  }
})