var mongoose = require('mongoose');
var data = require('../data.json')
var controller = {}

controller.readAll = (req,res)=>{
	data.find((err,data=>{
		if(err){
			res.status(404).send(err)
		}else{
			res.json({
				message:"Read all the data",
				data:data
			})
		}

	})
}

module.exports = {controller}