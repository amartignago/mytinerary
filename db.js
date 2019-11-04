const mongoose = require("mongoose") ;
const uri = 'mongodb+srv://amartignago:Mongo123@cluster0-fnjg4.mongodb.net/mytinerary?retryWrites=true&w=majority';

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Connection to Mongo DB established'))
  .catch(err => console.log(err))

const db= mongoose.connection;

module.export = db;