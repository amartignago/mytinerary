// controlador se conecta con el modelo. Aca iria mi procesamiento de la info, el find cuando lo tenga
const City = require("../models/city.model")

const getCities = (req,res) =>{
    City
    .find({}).then((cities)=>{res.json(cities).status(204)}
    )};

module.exports = {
    getCities
}


