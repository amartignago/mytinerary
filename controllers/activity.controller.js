// controlador se conecta con el modelo. Aca iria mi procesamiento de la info, el find cuando lo tenga
const Itinerary = require("../models/itinerary.model")
const Activity = require("../models/activity.model")


const getActivities = (req,res) =>{
    Activity
    .find({}).then((activities)=>{res.json(activities).status(204)}
    )};


const getActivitiesByItin = (req,res) =>{
    let itinRequested = req.params.itinID;  
    Itinerary
    .findById({_id:itinRequested})
    .populate("activities") //aca nombre de la prop del modelo donde busca y popula
    .then(((itinerary)=>{res.send(itinerary.activities).status(204)}))
};  

module.exports = {
    getActivities,
    getActivitiesByItin
}


