const userController = require ('../controllers/user.controller')
const router = require ('express').Router()

router.get("/users", userController.getUsers);
router.post("/users", userController.registerUser);



module.exports = router

