// controlador se conecta con el modelo. Aca iria mi procesamiento de la info, el find cuando lo tenga
const Itinerary = require("../models/itinerary.model")
const Activity = require("../models/activity.model")

const getItinerary = (req,res) =>{
    Itinerary
    .find({}).then((itineraries)=>{res.json(itineraries).status(204)}
    )};

const getItineraryById = (req,res) =>{
    let cityRequested = req.params.cityID;   
    City
    .find({cityID:cityRequested}).then((itineraries)=>{res.json(itineraries).status(204)})
    };

const getActivitiesByItin = (req,res) =>{
    let itinRequested = req.params._id;  
    Itinerary
    .findOne({_id:itinRequested})
    .populate("activities") //modelo del que trae los docs
    .then((itinerary)=>{res.send(itinerary.activities).status(204)}
    )};  


module.exports = {
    getItinerary,
    getItineraryById,
    getActivitiesByItin
}


