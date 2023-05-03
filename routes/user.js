const ex=require('express')
const route=ex.Router()
const userAuthorization=require("../middleware/auth")

const login=require('../controllers/login')
const chat=require('../controllers/chat')

route.post('/user/signup',login.signup)
route.post('/user/login',login.login)

route.post('/user/chat',userAuthorization.authenticate,chat.chat)



module.exports = route;