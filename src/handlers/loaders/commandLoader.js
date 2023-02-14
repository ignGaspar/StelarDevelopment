function loadCommands(client) {
  const fs = require("fs");
  const c = require('ansi-colors')
  const { BOT_NAME } = require(`${process.cwd()}/src/config/config.json`);

  let commandsArray = [];

  const commandsFolder = fs.readdirSync("./src/interactions");
  for (const folder of commandsFolder) {
    const commandFiles = fs
      .readdirSync(`./src/interactions/${folder}`)
      .filter((file) => file.endsWith(".js"));  

    for (const file of commandFiles) {
      const commandFile = require(`${process.cwd()}/src/interactions/${folder}/${file}`);

      const properties = { folder, ...commandFile };
      client.commands.set(commandFile.data.name, properties); 


      commandsArray.push(commandFile.data.toJSON());

      continue;
    }
  }

  client.application.commands.set(commandsArray);

  return console.log(c.magentaBright(c.bold(BOT_NAME)), c.gray('>>'), c.whiteBright(`${client.commands.size} commands loaded!`));
}

module.exports = { loadCommands };





