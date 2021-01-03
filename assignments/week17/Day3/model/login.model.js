const mongoose = require('mongoose')

const loginSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    Username:{
        type: String,
        required: true
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type: String,
        required: true
    },
    Group:[{
        type:String,
        required: true
    }]
})

module.exports = mongoose.model('login',loginSchema)