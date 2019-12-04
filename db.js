const mongoose = require("mongoose") ;
const uri = require('./config').mongoURI; 

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Connection to Mongo DB established'))
  .catch(err => console.log(err))

const db= mongoose.connection;

module.export = db;