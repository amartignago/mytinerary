// controlador se conecta con el modelo. Aca iria mi procesamiento de la info, el find cuando lo tenga
const Itinerary = require("../models/itinerary.model")


const getItineraries = (req,res) =>{
    Itinerary
    .find({}).then((itineraries)=>{res.json(itineraries).status(204)}
    )};

// itinerary by city esta en el controlador de cities

module.exports = {
    getItineraries,

}


