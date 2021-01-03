const todoModel = require('../model/todo_model')

const todoController = {
    addTodo:async(req,res) => {
        let eachTodo = new todoModel({
            Title:req.body.Title,
            Task:req.body.Task,
            Status:req.body.Status,
            Time:Date.now(),
            user_id:req.app.get('data1').user_id
        })
        await eachTodo.save()
        .then((data) => {
            // console.log(data)
            res.status(200).json({
                message:"Created todo",
                data:data
            })
        })
        .catch((err) => {
            res.status(403).json({
                message:" Error while Creating todo",
                error:err
            })
        })
    },

    getAllTodos:(req,res) => {
        todoModel.find({user_id:req.app.get('data1').user_id},(error,response) => {
            if(error){
                res.status(404).json({
                    message:"Error while retreiving all todos",
                    error:error
                })
            }
            else{
                if(response.length>0){
                    var todo = []
                    var inProgress = []
                    var completed = []
                    for(let i=0;i<response.length;i++){
                        if(response[i].Status === "Todo"){
                            todo.push(response[i])
                        }
                        else if(response[i].Status === "Completed"){
                            completed.push(response[i])
                        }
                        else{
                            inProgress.push(response[i])
                        }
                    }
                    var responseJson = {"Todo" : todo, "In Progress" : inProgress, "Completed":completed};
                    res.status(200).json({
                        message:"All todos",
                        data:responseJson
                    })
                }else{
                    res.status(404).json({
                        message:"No Todos Found"
                    })
                }
            }
        })
    },

    updateTodo:(req,res) => {
        todoModel.where({user_id:req.app.get('data1').user_id}).findOneAndUpdate(
            {_id:req.params._id},
            {
                Task:req.body.Task
            },
            {new:true}
        )
        .then((data) => {
            if(!data){
                res.status(403).json({
                    message:"No Todo Available"
                })
            }
            else{
                res.status(200).json({
                    message:"Updated Todo",
                    data:data
                })
            }
        })
        .catch((err) => {
            console.log("Error while updating Todo " , JSON.stringify(err) )
            res.status(401).json({
                message:"Error while updating Todo",
                error:err
            })
        })
    },

    deleteTodo: (req,res) => {
        todoModel.where({user_id:req.app.get("data1")._id}).findOneAndDelete(
            {_id:req.params._id},
        )
        .then((data) => {
            if(!data){
                res.status(403).json({
                    message:"No Todos."
                })
            }
            else{
                // console.log("Update" , data.Category,data.Link)
                res.status(200).json({
                    message:"Deleted Todos"
                })
            }
        })
        .catch((err) => {
            console.log("Error while deletiing Todos " , JSON.stringify(err) )
            res.status(500).json({
                message:"Error while deleting Todos",
                error:err
            })
        })
    },

    updateTaskStatus: (req,res) => {
        todoModel.where({user_id:req.app.get('data1').user_id}).findOneAndUpdate(
            {_id:req.params._id},
            {
                Status:req.body.Status
            },
            {new:true}
        ) 
        .then((data) => {
            if(!data){
                res.status(403).json({
                    message:"No Todo Available"
                })
            }
            else{
                res.status(200).json({
                    message:"Updated Todo's status",
                    data:data
                })
            }
        })
        .catch((err) => {
            console.log("Error while updating Todo's status " , JSON.stringify(err) )
            res.status(500).json({
                message:"Error while updating Todo's status",
                error:err
            })
        })  
    }
}

module.exports = todoController