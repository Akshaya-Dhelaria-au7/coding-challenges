var mongoose = require('mongoose');

var studentSchema = mongoose.Schema({
    First_Name:{
        type: String,
        required: true
    },
    Last_Name:{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required:true
    },
    Mobile:{
        type:Number,
        required:true,
        unique:true
    },
    Address:{
        type:String,
        required:true
    },
    Pincode:{
        type: Number,
        required:true
    },
    State:{
        type:String,
        required:true
    },
    Country:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model('signup',studentSchema)