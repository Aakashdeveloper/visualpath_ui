var express = require('express');

var app = express();
var port = 3000;

app.get('/',function(req,res){
    res.send(" i am home page one")
    console.log(" i am home page one")
})

app.get('/about', function(req,res){
    //res.send({name:'Express', class:'fullstack'})
    res.render('index')
})

app.listen(port,function(err){
    console.log("server is running on port "+ port)
})