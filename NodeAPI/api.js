const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();
var port = 7800;
const commanRouter = express.Router();
var db;
var coll = 'cars';
var collect = 'user'
var url = "mongodb://localhost:27017";

app.set('views', './src/views')
app.set('view engine', "ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/getCars',(req,res)=>{
    db.collection(coll).find().toArray((err,result)=>{
        if(err) return console.log(err)
        res.setHeader('Access-Control-Allow-Origin','*')
		res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept')
        res.json(result)
    })
})

app.get('/',(req,res)=>{
    res.render('index')
});

app.get('/thanku',(req,res)=>{
    res.render('thankyou')
})


app.post('/add_user', (req,res)=>{
    db.collection(collect).save(req.body,( err,result) => {
        if(err) return console.log(err)
        res.redirect('/thanku')
    })
})

app.put('/update_user', (req, res) => {
	console.log('i was called, and i am updating the db');
	console.log('Data received to update'+JSON.stringify(req.body));
  console.log('_id is '+req.body._id);
  db.collection(collection_name)
  .findOneAndUpdate({"_id":req.body._id}, {
    $set: {
      last_name: req.body.last_name,
      first_name: req.body.first_name,
      email: req.body.email
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

app.delete('/delete_user', (req, res) => {
	console.log('i was called, and i am deleting entry from the db');
  console.log('Data i got is '+JSON.stringify(req.body));
  db.collection(collection_name).findOneAndDelete({first_name: req.body.id},
  (err, result) => {
    if (err) return res.send(500, err)
    res.send({message: 'success'})
  })
})

MongoClient.connect(url, (err,client)=>{
    if(err) return console.log(err)
    db = client.db('carsApp')

    app.listen(port, () =>{
        console.log("running on port "+port)
    })
})