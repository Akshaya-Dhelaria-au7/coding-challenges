const express = require("express");
const bodyParser = require("body-parser")
// const hbs = require("hbs")
const port = 8080

let app = express()

let user = [
    {
        username:"akshay",
        country:"India"
    }
]

app.use(bodyParser.urlencoded({extended:false}))
app.set("view engine" , "hbs")
app.set("views" , "src/view/");


app.get("/" , (request,response)=>{
    let login = {}
    if(request.query.loginFailed){
        login.loginFailed = true
    }

    response.render("index",login)
})

app.post("/addTennisPlayer" , (request,response)=>{
    let name = request.body.name
    let password = request.body.country
    // console.log(request.body)
    let flag = false
    for (let eachUser in user){
        if (user[eachUser].username === name && user[eachUser].country === password ){
            flag = true
            break;
        }
    }
    if (flag == true){
        response.send("<h2>Login Successful</h2>")
    }else{
        response.redirect("/?loginFailed=true")
    }
})

app.put("/update",(req,res)=>{
   for (let eachUser in user){
       user[eachUser].username = "Akshay"
       res.send(user)
   }
})

app.delete("/delete",(req,res)=>{
    for (let eachUser in user){
        // console.log(user[eachUser])
        if (user[eachUser].username == "akshay"){
            user.splice(eachUser,1)
        }
    }
    res.send(user)
})

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`)
})

