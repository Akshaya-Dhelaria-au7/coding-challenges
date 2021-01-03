const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true
    },
    Email_Verified:{
        type:Boolean
    },
    OTP:{type:Number}
},
    {
        versionKey:false
    }
)

const user = mongoose.model('usersignup' , userSchema, 'usersignup')

module.exports = user;