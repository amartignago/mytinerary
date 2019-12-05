const userController = require ('../controllers/user.controller')
const router = require ('express').Router()
const upload = require ('../controllers/imageUploader')
const passport = require('../passport')

// router.get("/users", userController.getUsers);

router.get("/users", passport.authenticate("jwt", { session: false }), userController.getUserData);
router.post("/login", userController.loginUser);
router.post("/users", upload.single('avatarImage'), userController.registerUser);
// router.get("/users/google", userController.)
// router.get("/users/google/redirect", userController.)

module.exports = router

