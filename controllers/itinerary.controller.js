// controlador se conecta con el modelo. Aca iria mi procesamiento de la info, el find cuando lo tenga
const Itinerary = require("../models/itinerary.model")

const getItinerary = (req,res) =>{
    Itinerary
    .find({}).then((itineraries)=>{res.json(itineraries).status(204)}
    )};

const getItineraryById = (req,res) =>{
    let cityRequested = req.params.cityID;   
    City
    .find({cityID:cityRequested}).then((itineraries)=>{res.json(itineraries).status(204)})
    };



module.exports = {
    getItinerary,
    getItineraryById
}


