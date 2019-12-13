const mongoose = require("mongoose") 

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    avatarPath: String,
    email: String,
    firstName: String,
    lastName: String,
    country: String,
    googleID: String,
    favItins: [{type:mongoose.Schema.Types.ObjectId, ref:'itinerary'}]
})


module.exports = mongoose.model('user',userSchema)