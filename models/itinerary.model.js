const mongoose = require("mongoose") 

const itinerarySchema = new mongoose.Schema({
    title: String,
    userName: String,
    userPhoto: String,
    rating: Number,
    duration: Number,
    price: Number,
    hashtag: Array,
    activities: [{type:mongoose.Schema.Types.ObjectId, ref:'activity'}] //aca va el nombre del schema
})


module.exports = mongoose.model('itinerary',itinerarySchema)