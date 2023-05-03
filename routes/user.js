const ex=require('express')
const route=ex.Router()

const login=require('../controllers/login')

route.post('/user/signup',login.signup)
route.post('/user/login',login.login)




module.exports = route;