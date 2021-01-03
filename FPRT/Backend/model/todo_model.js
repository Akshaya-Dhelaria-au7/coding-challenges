const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = Schema({
    Title:{
        type:String,
        required:true
    },
    Task:{
        type:String,
        required:true
    },
    Status:{
        type:String,
        enum:["Todo", "In Progress" , "Completed"],
        default:'Todo'
    },
    Time:{
        type:Date
    },
    user_id:{
        type:Schema.Types.ObjectId,
        ref:'usersignup'
    }
})

const eachTodo = mongoose.model('eachtodo' , todoSchema , 'eachtodo')

module.exports = eachTodo
