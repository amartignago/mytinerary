const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const key = require("./config/config")
const User = require ('./models/user.model')
const passport = require ("passport")
const jwt = require("jsonwebtoken")
var GoogleStrategy = require('passport-google-oauth20').Strategy;

//Login auth strategy

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey= key.secretOrKey;

module.exports = passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
      .then(user => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch(err => console.log(err));
  })
);

//Google Strategy

const GOOGLE_CLIENT_ID = key.googleCredentials.ID
const GOOGLE_CLIENT_SECRET = key.googleCredentials.secret

passport.use(new GoogleStrategy({
  //first param: options
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/redirect"
  },
  //second param: cb function
  function(accessToken, refreshToken, profile, done) {
    // check if user already exists
    User.findOne({googleID: profile.id})
    
    .then((currentUser) => {
        if (currentUser) {
          return done (null, currentUser); // already have this user, done
        } else { 
          //it doesn't exist, create it first, then done.
            new User({
                googleID: profile.id,
                username: profile.displayName,
                password: "",
                avatarPath: profile.photos[0].value,
                email: "",
                firstName: profile.givenName,
                lastName: profile.familyName,
                country: "",
                favItins: []
            })
            .save()
            .then((newUser) => {
                done(null, newUser)
              }
            );
        }
    })
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
      done(null, user);
  });
});
