var express = require('express');

var app = express();
var port = 3000;

app.get('/',function(req,res){
    res.send(" i am home page")
    console.log(" i am home page")
})

app.get('/about', function(req,res){
    res.send("this is about page")
})

app.listen(port,function(err){
    console.log("server is running on port "+ port)
})