const userController = require ('../controllers/user.controller')
const router = require ('express').Router()
const upload = require ('../controllers/imageUploader')

router.get("/users", userController.getUsers);
router.post("/login", userController.loginUser);
router.post("/users", upload.single('avatarImage'), userController.registerUser);

module.exports = router

