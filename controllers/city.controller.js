// controlador se conecta con el modelo. Aca iria mi procesamiento de la info, el find cuando lo tenga
const City = require("../models/city.model")

const getCities = (req,res) =>{
    City
    .find({}).then((cities)=>{res.json(cities).status(204)}
    )};

const getCityItinerary = (req,res) =>{
    let cityRequested = req.params._id;  
    City
    .findOne({_id:cityRequested})
    .populate("itineraries") //modelo del que trae los docs
    .then((city)=>{res.send(city.itineraries).status(204)}
    )};    

const createCity = (req, res) => {
    console.log(req.body);
    City.create({
        nombre: req.body.nombre,
        pais: req.body.pais
    })
    .then((newCity)=>{
        res.json(newCity).status(204)
    })
    .catch((err)=>{
    res.json(err).status(500)
})
}

// const getCitiesImages = (req,res) =>{
//    res.send("aca va la imagen" + req.params.cityID).status(200)
//     };



module.exports = {
    getCities,
    getCityItinerary,
    createCity,
    // getCitiesImages

}


