const express = require ('express')
const router = express.Router ()
const UserController = require ('../Controllers/UserController')
const { AuthMiddleWare } = require('../Middlewares/AuthMiddleware')
const { DataValidation } = require('../Middlewares/DataValidation')


router.post('/register', DataValidation ,UserController.Register)
router.post('/login', DataValidation ,UserController.login)
router.get('/',AuthMiddleWare,UserController.GetDataUsers)
router.delete('/',AuthMiddleWare,UserController.DeleteUsers)






module.exports = router
