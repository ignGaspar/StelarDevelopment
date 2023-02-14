const mongoose = require('mongoose');
const c = require("ansi-colors");
const config = require("../config/config.json")

async function connect(){
  mongoose.set('strictQuery', false);
  mongoose.connect(config.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

 if(mongoose.connect){
   console.log(c.cyanBright(c.bold('Database')), (c.white('|')), (c.greenBright('Connected!')) )
   return;
 }
}

module.exports = {connect}