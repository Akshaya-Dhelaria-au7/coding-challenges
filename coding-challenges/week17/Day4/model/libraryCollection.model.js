var mongoose = require('mongoose')

var librarySchema = new mongoose.Schema({
    Book_Name:[{
        type: String,
        required: true
    }],
    Book_Author:{
        type:String,
        required:true
    },
    Genre:{
        type:String,
        required: true
    },
    Published_Year:{
        type: Number,
        required: true
    },
    Rating:{
        type: Number
    }
})

module.exports = mongoose.model('list',librarySchema)