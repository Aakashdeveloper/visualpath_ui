var animal = {
    type:"dog",
    color:"black"
}

var animal = {
    type:"dog",
    color:"black"
}
undefined
animal
{type: "dog", color: "black"}color: "black"type: "dog"__proto__: Object
typeof(animal)
"object"
animal.color
"black"
animal.type
"dog"
animal['color']
"black"
animal['type']
"dog"

var database={
    add:function(a,b){return a+b},
    sub:function(a,b){return a+b}
}
var database={
    add:function(a,b){return a+b},
    sub:function(a,b){return a+b}
}
undefined
database.add(1,2)
3
database.sub(3,4)
7
var database={
    add:function(a,b){return a+b},
    sub:function(a,b){return a-b}
}

undefined
database.sub(3,4)
-1

var animal = {
    type:"dog",
    color:"black"
}
undefined
animal
{type: "dog", color: "black"}
animal.breed("pug")
VM177:1 Uncaught TypeError: animal.breed is not a function
    at <anonymous>:1:8
(anonymous) @ VM177:1
animal.breed="pug"
"pug"
animal
{type: "dog", color: "black", breed: "pug"}
delete animal.color
true
animal
{type: "dog", breed: "pug"}



//Constructor
var bob = new Object();
bob.age =10
bob.color="white"
bob.setAge= function(newAge){
    bob.age = newAge
}

var tony = new Object();
tony.age = 10
tony.city = "london"
tony.setAge = function(newAge){
    tony.age = newAge
}

///////////////
var createAge = function(newAge){
    this.age = newAge
}

var bob = new Object();
bob.age =10
bob.color="white"
bob.setAge= createAge


var tony = new Object();
tony.age = 10
tony.city = "london"
tony.setAge = createAge


var database={
    add:function(a,b){return a+b},
    sub:function(a,b){return a-b}
}


var myData = new database()

function city(name,pop){
    this.name=name;
    this.pop = pop;
    this.country="India"
}

var jaipur = new city()

function database(){
    this.add=function(table,age){
        console.log("select * from "+table+" where age is greater than"+ age)
    }
    this.update= function(table,name){
        console.log("delete * from "+table+ " where name is == "+ name)
    }
}

var product =  new database()


function database(){
    this.add=function(table,age){
        console.log("select * from "+table+" where age is greater than"+ age)
    }
    this.update= function(table,name){
        console.log("delete * from "+table+ " where name is == "+ name)
    }
}

var product =  new database()
undefined
product.add("student",10)
VM463:3 select * from student where age is greater than10
undefined
product.update("product","teabag")
VM463:6 delete * from product where name is == teabag



///////////////
function password(type){
    this.type = type
}


password.prototype.minlength =function(){
    console.log(8)
}

var buddy = new password("strong");
/*buddy.minlength = function(){
    console.log(8)
}
*/
var snoppy = new password("week")

//////////////////

function robot(name){
    this.name=name;
    this.legs = 2
}

function human(name){
    this.name = name
    this.hands = 4
}

human.prototype = new robot()

var andrew = new human()
