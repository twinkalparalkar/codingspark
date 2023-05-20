const ex=require('express')
const bodyparse=require('body-parser')
const cors=require('cors')
const User=require('./models/user')
const Chat=require('./models/chat')
const Group=require('./models/group')
const UserGroup=require('./models/usergroup')
// var bcrypt = require('bcryptjs');

const userRoute=require('./routes/user')
require("dotenv").config()
const app=ex()

const server = require('http').createServer(app);
const io = require('socket.io')(server);
// io.on('connection', (socket) => {
//     console.log('A user connected');
  
//     socket.on('message', (data) => {
//       console.log('Received message:', data);
//       // Handle the message from the client
//     });
  
//     socket.on('disconnect', () => {
//       console.log('A user disconnected');
//     });
//   });
  

app.use(cors({
    origin:"*",
    credentials:true
}))
app.use(bodyparse.json({extended:false}))

User.hasMany(Chat);
Chat.belongsTo(User);

Group.hasMany(Chat);
Chat.belongsTo(Group);

User.belongsToMany(Group, { through: UserGroup });
Group.belongsToMany(User, { through: UserGroup });

app.use('/',userRoute)

app.listen(process.env.PORT)