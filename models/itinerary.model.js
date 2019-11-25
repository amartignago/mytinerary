const mongoose = require("mongoose") 

const itinerarySchema = new mongoose.Schema({
    title: String,
    userName: String,
    userPhoto: String,
    rating: Number,
    duration: Number,
    price: Number,
    hashtag: Array,
    activities: [{type:mongoose.Schema.Types.ObjectId, ref:'activities'}]
})


module.exports = mongoose.model('itinerary',itinerarySchema)