// controlador se conecta con el modelo. Aca iria mi procesamiento de la info, el find cuando lo tenga
const FavouriteModel = require("../models/favourite.model")

const getFavs = function (req, res) {
    const user = req.params.userID
    FavouriteModel.find({userID: user})
    .then((favourites) => {
        return res.json(favourites).status(204)
    })
    .catch((err) => {return res.json(err).status(404)
    })
}

const checkItinIsFav  = function (req, res) {
    const user = req.params.userID
    const itinID = req.params.itinID
    FavouriteModel.findOne({userID: user, itinID: itinID})
    .then((favourite) => {
        return res.json(favourite).status(204)
    })
    .catch((err) => {return res.json(err).status(404)
    })
}

const updateFavs = function (req, res) {
    const token = req.headers.authorization.split(" ")[1];
    const user = req.user

    FavouriteModel.findOne({itinID: req.params.itinID})
    .then((favourite) => {
        if(favourite!==null) {
            favourite.updateOne({liked: !favourite.liked})
            .then((fav) =>{ 
                return res.json(favourite).status(204)
                // return console.log('hola',fav)
            })
            .catch((err) => {return res.json(err).status(404)
            })
        }else {
            const userID= user._id
            const itinID= req.params.itinID
            let newFav = new FavouriteModel ({ 
                userID: userID,
                itinID: itinID,
                liked: true
            })
            newFav.save(function (err, fav) {
                if (err) {
                    return res.json(err).status(404)
                } else {
                return res.json(fav).status(204)
                }
            });
        }
    })
    .catch((err) => {return res.json(err).status(404)})
}

module.exports = {
    updateFavs,
    getFavs,
    checkItinIsFav
}


