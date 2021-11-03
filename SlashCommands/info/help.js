const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const prefix = ` [/] `
const {Command} = require(`reconlx`)
module.exports = new Command({
  name: "help",
  description: "shows all available bot's slash commands",
  options: [{
   name: `name`,
   description: `search for command name and command's information`,
   type: `STRING`,
   required: false
  }],
  run: async ({client, interaction}) => {
    var number = 0
    const message = interaction
const args = interaction.options.getString(`name`)

    const roleColor =`#BFBFBF`
    if (!args) {
      let categories = [];

      readdirSync("./SlashCommands/").forEach((dir) => {
        const commands = readdirSync(`./SlashCommands/${dir}/`).filter((file) =>
          file.endsWith(".js")
        );

        const cmds = commands.map((command) => {
          number = number+1
          let file = require(`../../SlashCommands/${dir}/${command}`);

          if (!file.name) return "No command name.";

          let name = file.name.replace(".js", "");

          return `\`${name}\``;
        });

        let data = new Object();

        data = {
          name: dir.toUpperCase(),
          value: cmds.length === 0 ? "In progress." : cmds.join(" "),
        };

        categories.push(data);
      });

      const embed = new MessageEmbed()
        .setTitle("📬 Need help? Here are all of my slash commands:")
        .addFields(categories)
        .setDescription(
          `Use \`${prefix}help\` followed by a command name to get more additional information on a command. For example: \`${prefix}help ban\`.\n(Total of slash commands: \`[${number}]\`)`
        )
        .setFooter(
          `Requested by ${message.user.tag}`,
          message.user.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor(roleColor);
      return message.followUp({embeds: [embed]});
    } else {
      const command =
        client.slashCommands.get(args.toLowerCase())

      if (!command) {
        const embed = new MessageEmbed()
          .setTitle(`Invalid command! Use \`${prefix}help\` for all of my commands!`)
          .setColor("FF0000");
        return message.followUp({embeds: [embed]});
      }

      const embed = new MessageEmbed()
        .setTitle("Command Details:")
        .addField("PREFIX:", `\`${prefix}\``)
        .addField(
          "COMMAND:",
          command.name ? `\`${command.name}\`` : "No name for this command."
        )
        .addField(
          "USAGE:",
          command.usage
            ? `\`${prefix}${command.name} ${command.usage}\``
            : `\`${prefix}${command.name}\``
        )
        .addField(
          "DESCRIPTION:",
          command.description
            ? command.description
            : "No description for this command."
        )
        .setFooter(
          `Requested by ${message.user.tag}`,
          message.user.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor(roleColor);
      return message.followUp({embeds: [embed]});
    }
  },
})