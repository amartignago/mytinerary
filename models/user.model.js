const mongoose = require("mongoose") 

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    avatarPath: String,
    email: String,
    firstName: String,
    lastName: String,
    country: String,
    googleID: String
})


module.exports = mongoose.model('user',userSchema)