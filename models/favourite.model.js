const mongoose = require("mongoose") 

const favouriteSchema = new mongoose.Schema({
    userID: String,
    itinID: String,
    liked: false
})


module.exports = mongoose.model('favourite',favouriteSchema)