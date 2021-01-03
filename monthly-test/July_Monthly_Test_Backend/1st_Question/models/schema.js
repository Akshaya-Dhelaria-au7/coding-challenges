const express = require('express');
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    Name:{
        type: String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Phone_Number:{
        type:Number,
        required:true,
        unique:true
    },
    Age:{
        type:Number,
        required:true
    },
    Gender:{
        type:String,
        enum:["Male","Female"],
        default:"Male",
        required:true
    },
    Address:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("json",schema);