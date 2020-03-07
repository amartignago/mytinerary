const express = require('express')
const app = express()
const port = require('./config/config').port;
const cors = require("cors")
const db = require("./db") //database connection here
const bodyParser = require('body-parser')
const passportSetup = require ("./passport")

//Routes:
const citiesRouter = require('./routes/city.routes')
const itinerariesRouter = require('./routes/itinerary.routes')
const imagesRouter = require('./routes/images.routes')
const activityRouter = require('./routes/activity.routes')
const userRouter = require('./routes/user.routes')
const favsRouter = require('./routes/favourite.routes')


app.use(passportSetup.initialize())
app.use(bodyParser.json())
app.use(cors());
app.use(citiesRouter, itinerariesRouter, imagesRouter, activityRouter, userRouter, favsRouter);

//Error handling:

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});


app.listen(port)

