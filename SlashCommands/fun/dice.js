const {Command} = require(`reconlx`)
const {MessageAttachment} = require(`discord.js`)
const {Dice} = require(`node.js_generator-package`)
module.exports = new Command({
  name: `dice`,
  description: `show a random dice image and number`,
  options: [
    {
      name: `type`,
      description: `choose a type of message you want to send`,
      type: "STRING",
      required: true,
      choices: [{
        name: `embed`,
       value: `1`
      },
      {
        name: `normal`,
         value: `2`
      }]
    }
  ],
  run: async({interaction, args}) =>{
    const [message] = args
    const dice = Dice().data
if(message.includes(`1`)){
return interaction.followUp({embeds: [
  embed = {
    title: `Randomizing dice!`,
    description: `**Dice number**: \`${dice.diceNumber}\`\n**Credits**: [click here.](${dice.credits})\n**image**:`,
    timestamp: new Date(),
    footer: {text: interaction.user.tag, iconURL: interaction.user.avatarURL()},
    image: {url: dice.image},
    color: `#BFBFBF`
  }
]})
}else{
  const attachment = new MessageAttachment(`${dice.image}`, `dice.png`)
return interaction.followUp({ content: `**Randomizing dice!**\n**Dice number**: \`${dice.diceNumber}\`\n**Credits**: [click here.](<${dice.credits}>)\n**image**:`, files: [attachment] })
}
  }
})