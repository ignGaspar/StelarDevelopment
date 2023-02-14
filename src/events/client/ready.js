const Discord = require('discord.js');
const c = require("ansi-colors");
const { connect } = require('../../database/connect.js')

module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    connect();
    console.log(c.cyanBright(c.bold('System')), (c.white('|')), (c.greenBright('The bot is now Online!')))

  }
}

 