var express = require('express');
var ejs = require('ejs');
var chalk = require('chalk');
var debug = require('debug')('app');
var morgan = require('morgan');
var commanRouter = express.Router();



var app = express();
var port = 3000;

app.use(morgan('tiny'));

var nav = [
    { 
        Links:'/',
        Text:"Home"
    },{
        Links:'/cars',
        Text:"Cars"
    }]



var carRouter = require('./src/routes/carRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);

app.use(express.static(__dirname + '/public'));
app.set('views', './src/views')
app.set('view engine', "ejs");

commanRouter.route('/')
        .get(function(req,res){
            res.render('index', {title:'Home', nav:nav});
    })


app.use('/',commanRouter);
app.use('/cars', carRouter);
app.use('/admin',adminRouter);


app.listen(port,function(err){
    //console.log(`server is running on my port ${chalk.blue(port)}`)
    debug(`server is running on my port ${chalk.blue(port)}`)
})