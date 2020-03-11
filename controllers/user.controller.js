const User = require("../models/user.model")
const bcrypt = require('bcryptjs')
const key = require("../config/config")
const jwt = require("jsonwebtoken")
const userModel = require ('../models/user.model')
const itineraryModel = require ('../models/itinerary.model')
const passport = require('../passport')

let jwtDecode = require('jwt-decode');

//list of all users:
const getUsers = (req, res) => {
    User
        .find({}).then((users) => { res.json(users).status(204) }
        )
};

//create new user:
const registerUser = (req, res) => {
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
                let avatarPath = null
                if (req.file!==undefined) {
                    avatarPath = req.file.path;
                }
                const hashedPassword = bcrypt.hashSync(req.body.password, 10) //else
                User.create({
                    username: req.body.username,
                    password: hashedPassword,
                    avatarPath: avatarPath,
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

//user local login w token
const loginUser = (req, res) => {
    User.findOne({username: req.body.userData.username})
    .then((user)=> {
        if (user==null) {//if user don't exist
            //por esta validacion pasa ok
            return res.status(402).send('Enter a valid username'); 
        } else { //if user exists, compare pass with hash
            if (bcrypt.compareSync(req.body.userData.password, user.password)) { //if true
                const payload = {
                    success: true,
                    id: user.id,
                    username: user.username,
                    avatarPicture: user.avatarPath
                };
                const options = {expiresIn: 2592000};
                jwt.sign(
                    payload,
                    key.secretOrKey,
                    options,
                    (err, token) => {
                        if(err){
                            console.log('error de token')
                            return res.json({
                                user: payload,
                                success: false,
                                token: "There was an error"
                        });
                        }else {
                            return res.json({
                                user: payload,
                                success: true,
                                token: token
                            });
                        }
                    }
                )
            } else {
                //esto funciona!!
                return res.status(402).send({message: "wrong password"}); 
            }
        }      
    })
    .catch((err) => { 
        res.json(err).status(500)
    }) 
}  
//local login get user data
const getUserData = (req, res) => {
    userModel
      .findOne({ _id: req.user.id })
      .then(user => {
        res.json(user);
      })
      .catch(err => res.status(404).json({ error: "User does not exist!" }));
  }

  //login user data w google
const userRedirect = (req, res) => {
    const payload = {
        id: req.user.id,
        username: req.user.username,
        avatarPicture: req.user.avatarPath,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        favItins: req.user.favItins
    };
    const options = {expiresIn: 2000};
    
    jwt.sign(
    payload,
    key.secretOrKey,
    options,
    (err, token) => {
        if(err || token == undefined)  {
         return res.json({
            payload:payload,
            success: false,
            token: "There was an error",
        });
        }else {
            // res.json({
            // payload: payload,
            // success: true,
            // token: token});
            // console.log('login google back ok')
            res.redirect(`http://localhost:3000/profile/${token}`) 
        }
    }
    )
};


module.exports = {
    getUsers,
    registerUser,
    loginUser,
    getUserData,
    userRedirect 
}
