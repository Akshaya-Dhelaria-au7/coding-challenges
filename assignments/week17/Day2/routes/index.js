var express = require('express');
var router = express.Router();
var array=[]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post("/register",(request,response)=>{
  // let id = id+1
  let flag = false
  const {username , email, password} = request.body
  // console.log("username is:",username,"email is: ",email,"password is:",password)
  if(username && email && password){
    flag=true
  }

  if(flag==true){
    array.push({username,email,password})
    console.log("Array will have: ",array)
    response.redirect('/users')
  }
})


router.post("/login",(request,response)=>{
  let flag=false
  const {username , password} = request.body
    for (let eachUser in array){
    if(array[eachUser].username == username && array[eachUser].password == password){
      console.log("Each user ka username", array[eachUser].username , array[eachUser].password )
      flag=true
    }
  }
  if(flag == true){
    response.send("Successfully Logged in")
  }else{
    response.status(404).send("<h2>Oops!!Incorrect Username or Password</h2>")
  }
})

router.put("/update",(req,res)=>{
    for(let eachUser in array){
        array[eachUser].username == req.body.username
        array[eachUser].email == req.body.email
        array[eachUser].password == req.body.password
    }
    res.redirect('/users')
})  

router.delete("/delete",(req,res)=>{
  const {username , email} = req.body
  for (let eachUser in array){
    if(array[eachUser].username == username || array[eachUser].email == email){
      console.log("Username: ",array[eachUser].username,username,email)
      array.splice(eachUser,1)
      res.send("User Deleted")
    }
  }
})

module.exports = router;
