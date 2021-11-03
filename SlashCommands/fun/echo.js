const {Command} = require(`reconlx`)

module.exports = new Command({
  name: `echo`,
  description: `echo the message or repeat the message you provide in the options value or string`,
  options: [
    {
      name: `message`,
      description: `message to echo`,
      type: "STRING",
      required: true
    }
  ],
  run: async({interaction}) =>{
    const message = interaction.options.getString("message")

    interaction.followUp(`${message}`)
  }
})