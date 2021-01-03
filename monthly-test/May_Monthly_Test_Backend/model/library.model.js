var mongoose = require('mongoose')


var librarySchema = new mongoose.Schema({
    Blog_Title:{
        type:String,
        required: true
    },
    Author:{
        type:String,
        required:true,
    },
    Genre:{
        type:String,
        required:true
    },
    Rating:{
        type:Number,
        required:true
    },
    Comment:{
        type:String,
        required:true
    },
    Year_Of_Release:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('blog' , librarySchema)