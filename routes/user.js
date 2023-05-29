const ex=require('express')
const route=ex.Router()
const userAuthorization=require("../middleware/auth")
const userController=require('../controller/userConstroller')

const login=require('../controller/login')

route.post('/user/signup',login.signup)
route.post('/user/login1',login.login)


route.get('/user/addcart',userAuthorization.authenticate,userController.postreq)
route.get('/user/getcart',userAuthorization.authenticate,userController.getreq)

route.get('/user/display',userAuthorization.authenticate,userController.display_req)
route.delete('/user/delete/:id',userAuthorization.authenticate, userController.delete_req)


module.exports = route;