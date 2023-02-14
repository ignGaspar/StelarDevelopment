function eventLoader(client){
  const fs = require('fs')
  const c = require('ansi-colors')
    const { BOT_NAME } = require(`${process.cwd()}/src/config/config.json`);

  const folders = fs.readdirSync('./src/events')
  for(const folder of folders){
    const files = fs.readdirSync(`./src/events/${folder}`).filter((file) => file.endsWith('.js'));

    for(const file of files){
      const event = require(`../../events/${folder}/${file}`);

      if(event.rest){
        if(event.once)
          client.rest.once(event.name, (...args) => 
            event.execute(...args, client)
          );
        else
          client.rest.on(event.name, (...args) =>
            event.execute(...args, client)
            ) 
      }else{
        if(event.once) 
          client.once(event.name, (...args) => event.execute(...args, client));
        else client.on(event.name, (...args) => event.execute(...args, client));
      }

      continue;
    }
  }
  return console.log(c.magentaBright(c.bold(BOT_NAME)), c.gray('>>'), c.whiteBright(`Events loaded!`));
}

module.exports = {eventLoader};