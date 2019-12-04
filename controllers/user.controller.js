const User = require("../models/user.model")
var bcrypt = require('bcryptjs')

//list of all users:
const getUsers = (req, res) => {
    User
        .find({}).then((users) => { res.json(users).status(204) }
        )
};

//create new user:
const registerUser = (req, res) => {
        console.log(req.body)
    if(
        req.body.terms == false ||
         req.body.username == "" ||
         req.body.password == "" ||
         req.body.email == "" ||
         req.body.firstName == "" ||
         req.body.lastName == "" ||
         req.body.country == "")  return res.send({message:"Please complete all the fields"});
        
         // if any is empty return a message, otherwise next validation

        User.findOne({username: req.body.username}).then((user)=> {
            console.log(user)
            if(user!==null) return res.send({message: "the username already exists"}) // if username exists, provide error
            const hashedPassword = bcrypt.hashSync(req.body.password, 10)
            User.create({
                username: req.body.username,
                password: hashedPassword,
                avatarPath: req.file.path,
                email: req.body.email,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                country: req.body.country
            })
                .then((newUser) => {
                        res.json(newUser).status(204)
                }).catch((err) => {
                        res.json(err).status(500)
                })
        }   )    
}

const loginUser = (req, res) => {
    // User.findOne({username: req.body.username}).then((user)=> {
    //     if(user!==null) return res.send({message: "the username already exists"}) 
        
};

module.exports = {
    getUsers,
    registerUser,
    loginUser
}
