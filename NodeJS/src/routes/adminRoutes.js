const express = require('express');
//const mongoClient  = require('mongodb').MongoClient;
const { MongoClient } = require('mongodb');
const adminRouter = express.Router();
const debug = require('debug')('app:adminRouter')

var Cars = [
    {
        "id": 1,
        "brand": "Ford",
        "model": "Mustang",
        "year": 1985,
        "image": "https://image.ibb.co/fm778n/accord.jpg",
        "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
    },
    {
        "id": 2,
        "brand": "Nissan",
        "model": "Altima",
        "year": 2017,
        "image": "https://image.ibb.co/fm778n/accord.jpg",
        "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
    },
    {
        "id": 3,
        "brand": "Nissan",
        "model": "Armada",
        "year": 2017,
        "image": "https://image.ibb.co/fm778n/accord.jpg",
        "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
    },
    {
        "id": 4,
        "brand": "Nissan",
        "model": "Frontier",
        "year": 2017,
        "image": "https://image.ibb.co/fm778n/accord.jpg",
        "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
    },
    {
        "id": 5,
        "brand": "Nissan",
        "model": "Maxima",
        "year": 2017,
        "image": "https://image.ibb.co/fm778n/accord.jpg",
        "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
    }
]
function router(nav){
    adminRouter.route('/')
        .get((req,res) => {
            const url = 'mongodb://localhost:27017';
            const dbName = 'carsApp';

            (async function mongo(){
                let client;
                try{
                    client = await MongoClient.connect(url);
                    const db = client.db(dbName);

                    const response = await db.collection('cars').insertMany(Cars);
                    res.json(response)
                }
                catch(err){
                    debug(err.stack)
                }
                client.close();
            }())

            res.send('inserting data')
        })
    return  adminRouter;
}

module.exports = router