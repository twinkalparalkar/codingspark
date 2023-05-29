
const uuid = require('uuid');
var bcrypt = require('bcryptjs');

const User = require('../model/user');
const Forgotpassword = require('../model/forgetpassword');
const sib = require('sib-api-v3-sdk');
require('dotenv').config();

const forgotpassword = async (req, res) => {
    try {
        const { email } =  req.body;
        const user = await User.findOne({where : { email }});
        if(user){
            const id = uuid.v4();
            user.createForgotpassword({ id , active: true })
                .catch(err => {
                    throw new Error(err)
                })

        // Configure the SDK with your API key
        const defaultClient = sib.ApiClient.instance;
        const apiKey = defaultClient.authentications['api-key'];
        apiKey.apiKey = process.env.SMTP_Key;

        // Create a new TransactionalEmailsApi instance
        const transactionalEmailsApi = new sib.TransactionalEmailsApi();

        // Create a new sendSmtpEmail object with your email details
        const sendSmtpEmail = new sib.SendSmtpEmail();
        sendSmtpEmail.to = [{email: email}];
        sendSmtpEmail.sender = {email: 'twinkalparalkar1999@gmail.com'};
        sendSmtpEmail.subject = 'Sending link for reset Password';
        sendSmtpEmail.htmlContent= `<a href="http://localhost:3000/password/resetpassword/${id}">Reset password</a>`

        // Send the email using the TransactionalEmailsApi
        transactionalEmailsApi.sendTransacEmail(sendSmtpEmail)
        .then((response) => {
            console.log('Email sent successfully:', response);
            return res.status(response[0].statusCode).json({message: 'Link to reset password sent to your mail ', sucess: true})

        })
        .catch((error) => {
            console.error('Error sending email:', error);
        });
            

                }
            }
        catch(err){
        console.error(err)
        return res.json({ message: err, sucess: false });
    }

}

const resetpassword = (req, res) => {
    const id =  req.params.id;
    Forgotpassword.findOne({ where : { id }}).then(forgotpasswordrequest => {
        if(forgotpasswordrequest){
            forgotpasswordrequest.update({ active: false});
            res.status(200).send(`<html>
                                    <script>
                                        function formsubmitted(e){
                                            e.preventDefault();
                                            console.log('called')
                                        }
                                    </script>
                                    <form action="/password/updatepassword/${id}" method="get">
                                        <label for="newpassword">Enter New password</label>
                                        <input name="newpassword" type="password" required></input>
                                        <button>reset password</button>
                                    </form>
                                </html>`
                                )
            res.end()

        }
    })
}

const updatepassword = (req, res) => {

    try {
        const { newpassword } = req.query;
        const { resetpasswordid } = req.params;
        Forgotpassword.findOne({ where : { id: resetpasswordid }}).then(resetpasswordrequest => {
            User.findOne({where: { id : resetpasswordrequest.userId}}).then(user => {
                // console.log('userDetails', user)
                if(user) {
                    //encrypt the password

                    const saltRounds = 10;
                    bcrypt.genSalt(saltRounds, function(err, salt) {
                        if(err){
                            console.log(err);
                            throw new Error(err);
                        }
                        bcrypt.hash(newpassword, salt, function(err, hash) {
                            // Store hash in your password DB.
                            if(err){
                                console.log(err);
                                throw new Error(err);
                            }
                            user.update({ password: hash }).then(() => {
                                res.status(201).json({message: 'Successfuly update the new password'})
                            })
                        });
                    });
            } else{
                return res.status(404).json({ error: 'No user Exists', success: false})
            }
            })
        })
    } catch(error){
        return res.status(403).json({ error, success: false } )
    }

}


module.exports = {
    forgotpassword,
    updatepassword,
    resetpassword
}