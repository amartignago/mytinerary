const express = require('express')
const app = express()
var port    =   process.env.PORT || 5000;
const cors = require("cors")
const db = require("./db")
const citiesRouter = require('./routes/city.routes')
const itinerariesRouter = require('./routes/itinerary.routes')
const imagesRouter = require('./routes/images.routes')
const activityRouter = require('./routes/activity.routes')
const bodyParser = require('body-parser')

//agregar bodyparser y app.bodyparser

app.use(bodyParser.json())
app.use(cors());
app.use(citiesRouter, itinerariesRouter, imagesRouter, activityRouter);
app.listen(port)

