const nodemailer = require('nodemailer')
var array = []

const sendEmail = async options => {
    let transport = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.email,
            pass:process.env.password
        }
    })

    let mail_options = {
        from:'"Todo List" <codinghunt9@gmail.com>',
        to: options.email,
        subject:'Welcome to Todos',
        html: 
        `<div>
            <h3><strong>Welcome to Todos<strong></h3>
            <br>
            <p>Please use the below OTP to sign in to Todos</p>
            <p><strong>${options.message}</strong></p>
            <br>
            <p>Regards</p>
        </div>
        `
    }

    await transport.sendMail(mail_options)
    console.log("Mail sent to :" , options.email)
}

module.exports = sendEmail;

//mail: todofprt@gmail.com
//password: todo@123