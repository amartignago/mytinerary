const mongoose = require("mongoose") 

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    avatarPath: String,
    email: String,
    firstName: String,
    lastName: String,
    country: String
})


module.exports = mongoose.model('user',userSchema)