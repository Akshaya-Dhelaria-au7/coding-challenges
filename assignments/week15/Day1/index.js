let express = require("express");
let bodyParser = require("body-parser");

const port = 3000;
let app = express();

app.use(bodyParser.json()); //Middleware are those who transforms the incoming request

var obj = [{
  id: 1,
  name: "Gourav",
  age: 25,
  place: "Bangalore"
}, {
  id: 2,
  name: "Pakshal",
  age: 23,
  place: "Mumbai"
}, {
  id: 3,
  name: "Akshaya",
  age: 22,
  place: "Chennai"
}];

app.get("/", (request, response) => {
  response.send(obj); //get all the arrays of objects
});

app.get("/id/:number", (req, res) => {
  let flag = false;
  let i = 0;

  for (i in obj) {
    if (obj[i].id == Number(req.params.number)) {
      flag = true;
      break;
    }
  }

  if (flag == true) {
    res.send(obj[i]); //get the particular object depends upon the ID 
  } else {
    res.send("ID number doesn't exist!!");
  }
});

app.post("/create", (req, res) => {
  // console.log(req.body)
  obj = obj.concat(req.body);
  res.send(obj); //Create a new item
});
app.put("/update/:id", (req, res) => {
  for (let i in obj) {
    if (obj[i].id == Number(req.params.id)) {
      obj[i].name = "Shri Nath Sharma"; //update name in the ID given by the user
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

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});