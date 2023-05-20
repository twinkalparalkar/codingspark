const ex=require('express')
const route=ex.Router()
const userAuthorization=require("../middleware/auth")

const login=require('../controllers/login')
const chat=require('../controllers/chat')
const group=require('../controllers/group')
const file=require('../controllers/file')
const admin=require('../controllers/admin')

route.post('/user/signup',login.signup)
route.post('/user/login',login.login)
route.get('/user/displayuser',userAuthorization.authenticate,login.displayuser)
route.get('/user/sendinvite',userAuthorization.authenticate,login.sendinvite)


route.post('/user/chat',userAuthorization.authenticate,chat.chat)
route.get('/user/display',userAuthorization.authenticate,chat.display_chat)

route.post('/user/group',userAuthorization.authenticate,group.create_group)
route.get('/user/displaygroup',userAuthorization.authenticate,group.display_group)
route.get('/user/groupcontent',userAuthorization.authenticate,group.groupcontent)
route.get('/user/searchuser',userAuthorization.authenticate,group.joingroup)


route.get('/user/invite',userAuthorization.authenticate,admin.invite_check)
route.get('/user/addgroup',userAuthorization.authenticate,admin.addgroup)
route.get('/user/displaygroupmember',userAuthorization.authenticate,admin.displaygroupmember)
route.get('/user/removeuser',userAuthorization.authenticate,admin.removeuser)
route.get('/user/makeadmin',userAuthorization.authenticate,admin.makeadmin)


// route.get('/user/file',userAuthorization.authenticate,file.download)


const multer = require('multer');

// const app = express();
const upload = multer({ dest: 'uploads/' }); 
route.post('/upload',userAuthorization.authenticate, upload.single('file'), file.upload);


module.exports = route;