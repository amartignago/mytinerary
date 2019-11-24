//"el modelo se conecta con la bd"
const mongoose = require("mongoose") 

const citySchema =new mongoose.Schema({
    nombre:String,
    pais: String,
    img: String,
    itineraries: [{type:mongoose.Schema.Types.ObjectId, ref:'itinerary'}]
    
})

module.exports = mongoose.model('city',citySchema)