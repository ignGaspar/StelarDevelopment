const { SlashCommandBuilder} = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder() 
  .setName('test') //nombre en min.
  .setDescription("asd"),

  async execute(interaction, client){
    await interaction.reply({content: "test"})
  }
}