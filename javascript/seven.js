var num = 10
if(num%2 ==0){
    console.log("numner is even")
}else{
    console.log("number is odd")
}


function isEven(a){
    if(a%2 ==0){
        console.log("numner is even")
    }else{
        console.log("number is odd")
    }
}

isEven(8)

//function
function add(a,b){
    return a+b
}
undefined
add(8,6)
14
//method
var add = function(a,b){
    return a+b
}

add(9,5)

var a = "javascript"
var b = " i am doing"+a
//////Es6////////////////



var add = (a,b) => {return a+b}

var a = "javascript"
var b = `i am doing ${a}`


let b =10
VM183:1 Uncaught SyntaxError: Identifier 'b' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM183:1
let z = 10
undefined
z
10
let z = 11
VM193:1 Uncaught SyntaxError: Identifier 'z' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM193:1
z = "aakash"
"aakash"
const g = "name"
undefined
g
"name"
g = "class"
VM209:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:3


