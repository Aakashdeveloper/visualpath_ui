var express = require('express');
const {MongoClient, ObjectID} = require('mongodb');
var carRouter = express.Router();

var router = function(nav){
    carRouter.route('/')
        .get(function(req,res){
            const url = 'mongodb://localhost:27017';
            const dbName = 'carsApp';

        (async function mongo(){
            let client;
            try{
                client = await MongoClient.connect(url);
                const db = client.db(dbName);
                const col = await db.collection('cars');

                const cars = await col.find().toArray();
                res.render('carList',
                {   
                    title:"Car List",
                    result:cars, 
                    nav:nav
                })
            }
            catch(err){
                console.log("no connection");
            }
            client.close();
        }())


        
    })
    carRouter.route('/:id')
        .get(function(req,res){
        const {id} = req.params;
        const url = 'mongodb://localhost:27017';
        const dbName = 'carsApp';

        (async function mongo(){
            let client;
            try{
                client = await MongoClient.connect(url);
                const db = client.db(dbName);
                const col = await db.collection('cars');

                const car  = await col.findOne({ _id:new ObjectID(id)})
                res.render('carDetails',
                {   
                    title:"Car Details",
                    result:car, 
                    nav:nav
                })
            }
            catch(err){
                console.log("no connection")
            }
            client.close()
        }())


        
    })
    return carRouter;
}

module.exports = router;