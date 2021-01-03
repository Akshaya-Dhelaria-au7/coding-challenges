const Login = require('../model/login.model')

const loginController = {}

loginController.create = (req,res)=>{
    let login = new Login(req.body)
    login.save((err,data)=>{
        if(err) return console.log(err)
        console.log("Logged in Successfully")
        res.send(login)
    })
}

module.exports={loginController}