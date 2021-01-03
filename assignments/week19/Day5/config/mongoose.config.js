var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/List',({unifiedTopology:true, newUrlParser:true}))
.then(()=>console.log("Connected!!!!"))
.catch((err)=>console.log("Error in connection and the error is " + err))

modules.export = mongoose