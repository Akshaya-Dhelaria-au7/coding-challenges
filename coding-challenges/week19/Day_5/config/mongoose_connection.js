var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost	/Read',({unifiedTopology:true, newUrlParser:true}));
.then(()=>console.log("Connected!!!!"))
.catch((err)=>console.log("Error in connection " + err))

modules.export = mongoose