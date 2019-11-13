const express = require('express')
const app = express()
var port    =   process.env.PORT || 5000;
const cors = require("cors")
const db = require("./db")
const citiesRouter = require('./routes/city.routes')

//agregar bodyparser y app.bodyparser

app.use(cors());
app.use(citiesRouter);
app.listen(port)

