const {Client, GatewayIntentBits, Partials, Collection} = require('discord.js');
const { Guilds, GuildMembers, GuildMessages, MessageContent, GuildMessageReactions} = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember, Channel } = Partials;
const {eventLoader} = require("./handlers/loaders/eventLoader.js")
const {loadCommands} = require("./handlers/loaders/commandLoader.js")
const config = require("./config/config.json")

const client = new Client({
    partials: [
      User, 
      Message, 
      GuildMember, 
      ThreadMember, 
      Channel
    ],
    intents: [
      Guilds,
      GuildMembers, 
      GuildMessages,
      MessageContent,
      GuildMessageReactions
    ],
})

client.commands = new Collection()

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return

  const command = client.commands.get(interaction.commandName)

  if (!command) {
    interaction.reply({ content: "there isn't a command like that" })
  }

  command.execute(interaction, client)
})

client.login(config.TOKEN).then(() => {
  eventLoader(client);
  loadCommands(client)
})