const mongoose = require("mongoose") 

const activitySchema = new mongoose.Schema({
    name: String,
    adress: String,
    photo: String,
    time: Number,
    cost: Number,
    comments: Number
})


module.exports = mongoose.model('activity',activitySchema)