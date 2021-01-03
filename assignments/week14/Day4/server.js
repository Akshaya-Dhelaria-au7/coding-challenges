let express = require("express")
let request=require("request")

let app = express()
const port = 3000
//
app.get("/fetchData/:postIdnumber",(req,res)=>{
	request('http://jsonplaceholder.typicode.com/comments', function (error, response, body) {
  	if (!error && response.statusCode == 200) {
    	// console.log(req.params)
    	let filteredArray = []
    	let count = 0
    	let result = 0
    	let fetchedResult=JSON.parse(body)
		for(i=0;i<fetchedResult.length;i++){
			let object = {}
			object.postId = fetchedResult[i].postId
			if (fetchedResult[i].postId == Number(req.params.postIdnumber)){
				count+=1
			}


			if (fetchedResult[i].body.length <= 50){
			object.body = fetchedResult[i].body
			}else{
			let result = fetchedResult[i].body.slice(0,49)
			object.body = result
			}
			filteredArray.push(object)
		}
		
		console.log(filteredArray)
    	res.send(String("The count is " + count))
  }
});



})

app.listen(port,()=>{
	console.log("I am running at port " + port)
})
