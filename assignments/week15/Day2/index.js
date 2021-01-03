let express = require("express")
let morgan = require("morgan")
let path = require("path")
const port  = 3000


let app = express()

let obj = [{
    id: 1,
    Name: "Gourav",
    EmailID: "gourav@gmail.com",
    place: "Bangalore"
},
{
    id: 2,
    Name: "Pakshal",
    EmailID: "pakshal@gmail.com",
    place: "Bengaluru"   
},
{
    id: 3,
    Name: "Akshay",
    EmailID: "akshay@gmail.com",
    place: "Banglore"
}]


app.set("views" , "./public")
app.set("view engine" , "pug")

app.get("/",(req,res)=>{
  res.render("index",{obj})
});

app.get("/id/:number", (req, res) => {
  let flag = false;
  let i = 0;

  for (i=0;i<obj.length;i++) {
    if (obj[i].id == Number(req.params.number)) {
      flag = true;
      break;
    }
  }
  if (flag == true) {
    obj1=obj[i]
    res.render("index", {obj1}); //get the particular object depends upon the ID 
  }
});

app.post("/create", (req,res)=>{
  obj = obj.concat(req.body)
  res.send(obj)
});

app.put("/update/:id", (req, res) => {
  for (let i in obj) {
    if (obj[i].id == Number(req.params.id)) {
      obj[i].Name = "Shri Nath Sharma"; //update name in the ID given by the user
    }
  }
  res.send(obj);
});

app.delete("/delete/:number", (req, res) => {
  for (let i in obj) {
    if (obj[i].id == Number(req.params.number)) {
      obj.splice(i, 1); //Delete the item on the basis of ID
    }
  }
  res.send(obj);
});

app.listen(port)