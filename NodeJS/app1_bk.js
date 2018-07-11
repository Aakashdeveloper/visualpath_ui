var express = require('express');
var ejs = require('ejs');
var commanRouter = express.Router();
var bookRouter = express.Router();
var authorRouter = express.Router();

var app = express();
var port = 3000;

app.set('view engine', "ejs");

/*app.get('/',function(req,res){
    res.render('index', {title:'Express+ EJS'});
    console.log(" i am home page one")
})

app.get('/about', function(req,res){
    //res.send({name:'Express', class:'fullstack'})
    res.render('about')
})*/

commanRouter.route('/home')
        .get(function(req,res){
            res.render('index', {title:'Express+ EJS'});
        })
commanRouter.route('/about')
        .get(function(req,res){
            res.render('about', {title:'Express+ EJS'});
        })

bookRouter.route('/')
    .get(function(req,res){
        res.send('this is book page')
    })
bookRouter.route('/detail')
    .get(function(req,res){
        res.send('this is detail page of books')
    })

authorRouter.route('/')
    .get(function(req,res){
        res.send('this is author page')
    })

authorRouter.route('/detail')
    .get(function(req,res){
        res.send('this is detail author page')
    })


app.get('/detail', function(req,res){
    //res.send({name:'Express', class:'fullstack'})
    res.send('this is detail page')
})

app.use('/api',commanRouter);
app.use('/books', bookRouter);
app.use('/author', authorRouter)

app.listen(port,function(err){
    console.log("server is running on port "+ port)
})