var express = require('express');
let request = require("request")
var fs = require('fs')
var asyncfor = require('async')
var Promise = require('promise')

var PORT = 5000

var array = [fetchData, setTimeoutaddition, readingFile]
var resultArray=[]

function fetchData() {
    return new Promise(function (resolve, reject) {
        request('http://jsonplaceholder.typicode.com/comments', async function (error, response, body) {
            if (!error && response.statusCode == 200) {
                let fetchedResult = JSON.parse(body)
                //console.log(fetchedResult)
                resolve(fetchedResult)
            }
        })
    })
}


async function setTimeoutaddition(a, b) {
    return new Promise(function (resolve, reject) {
        setTimeout(async () => {
            resolve(a + b)
        }, 5000);
    })

}

function readingFile() {
    return new Promise(function (resolve, reject) {
        let res = fs.readFile('test.txt', (req, res) => {
            resolve(res.toString())
        })
    })


}

function asyncCall() {
    return new Promise(function(resolve,reject){
        asyncfor.eachSeries(array, function (key, next) {
            if (key == fetchData) {
                fetchData().then(function(val){
                    console.log(val)
                    resultArray.push(val)
                    next()
                })
                
            } else if (key == setTimeoutaddition) {
                setTimeoutaddition(2, 3).then(function(val){
                    console.log(val)
                    resultArray.push(val)
                    next()
                })
            } else {
                readingFile().then(function(val){
                    console.log(val)
                    resultArray.push(val)
                    next()
                })
            }
            resolve(resultArray)
        }, function (err) {
            //console.log(err)
        })
        
    })
    
    
}

asyncCall()