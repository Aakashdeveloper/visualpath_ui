const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
var port = 7800;
const commanRouter = express.Router();
var db;
var coll = 'cars';
var url = "mongodb://localhost:27017";


app.get('/',(req,res)=>{
    db.collection(coll).find().toArray((err,result)=>{
        if(err) return console.log(err)
        res.json(result)
    })
})


MongoClient.connect(url, (err,client)=>{
    if(err) return console.log(err)
    db = client.db('carsApp')

    app.listen(port, () =>{
        console.log("running on port "+port)
    })
})