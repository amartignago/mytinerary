//"el modelo se conecta con la bd"
const mongoose = require("mongoose") 

const citySchema =new mongoose.Schema({
    nombre:String,
    pais: String
})
module.exports = mongoose.model('city',citySchema)