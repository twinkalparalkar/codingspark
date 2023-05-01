const ex=require('express')
const route=ex.Router()
const userAuthorization=require("../middleware/auth")
const userController=require('../controller/userConstroller')
const preminum=require('../controller/preminum')
const download=require('../controller/download_ex')
const login=require('../controller/login')

route.post('/user/signup',login.signup)
route.post('/user/login1',login.login)


route.post('/user/additem',userAuthorization.authenticate,userController.postreq)
route.get('/user/display',userAuthorization.authenticate,userController.display_req)
route.delete('/user/delete/:id',userAuthorization.authenticate, userController.delete_req)

route.get('/user/preminum',userAuthorization.authenticate,preminum.preminum)
route.post('/user/updatepayment',userAuthorization.authenticate,preminum.updatepayment)
route.get('/user/showleader',userAuthorization.authenticate,preminum.showleader)

route.get('/user/download',userAuthorization.authenticate,download.downloadExpenses)
route.get('/user/displayfile',userAuthorization.authenticate,download.display_download)


module.exports = route;