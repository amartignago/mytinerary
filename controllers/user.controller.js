const User = require("../models/user.model")
const bcrypt = require('bcryptjs')
const key = require("../config")
const jwt = require("jsonwebtoken")

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
            if(user!==null) return res.send({message: "the username already exists"}) // if username exists, provide error
                console.log(req.file)
                const hashedPassword = bcrypt.hashSync(req.body.userFormData.password, 10) //else
                User.create({
                    username: req.body.userFormData.username,
                    password: hashedPassword,
                    // avatarPath: req.file.name,
                    email: req.body.userFormData.email,
                    firstName: req.body.userFormData.firstName,
                    lastName: req.body.userFormData.lastName,
                    country: req.body.userFormData.country
                })
                    .then((newUser) => {
                            res.json(newUser).status(204)
                    }).catch((err) => {
                            res.json(err).status(500)
                    })
        }   )    
}

//user login
const loginUser = (req, res) => {
    console.log('body')
    console.log(req.body)
    User.findOne({username: req.body.userFormData.username})
    .then((user)=> {
        console.log(user)
        if (user==null) {//if user don't exist
            return res.status(500).send('Enter a valid username'); 
        } else { //if user exists, compare pass with hash
            if (bcrypt.compareSync(req.body.userFormData.password, user.password)) { //if true
                const payload = {
                    id: user.id,
                    username: user.username,
                    // avatarPicture: user.avatarPicture
                };
                const options = {expiresIn: 2592000};
                jwt.sign(
                payload,
                key.secretOrKey,
                options,
                (err, token) => {
                    if(err){
                     return res.json({
                        success: false,
                        token: "There was an error"
                    });
                    }else {
                     return res.json({
                        success: true,
                        token: token
                    });
                    }
                }
                )
            } else {
                return res.status(400).send({message: "wrong password"}); 
            }
        }      
    })
    .catch((err) => { 
    res.json(err).status(500)
    }) 
}  

module.exports = {
    getUsers,
    registerUser,
    loginUser
}
