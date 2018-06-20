var color = ["red","yellow","green"];
var marks = [10,4,40,67]
var istrue = [true, false,false,true ,true]


var myArray = [10,4,5,"DF","D",true,88,"true",false]


var myArray = [10,4,5,"DF","D",true,88,"true",false]
undefined
myArray
(9) [10, 4, 5, "DF", "D", true, 88, "true", false]
myArray[0]
10
myArray[6]
88
myArray.length
9
myArray.push("aakash")
10
myArray
(10) [10, 4, 5, "DF", "D", true, 88, "true", false, "aakash"]
myArray.pop(5)
"aakash"
myArray
(9) [10, 4, 5, "DF", "D", true, 88, "true", false]
a.shift()

myArray.shift(87)
10
myArray.unshift(87)
9
myArray
(9) [87, 4, 5, "DF", "D", true, 88, "true", false]
//push add in the end
//pop take out from the end

//shift take out form the begning
//unshift add in front


myArray = [87, 4, 5, "DF", "D", true, 88, "true", false]
(9) [87, 4, 5, "DF", "D", true, 88, "true", false]
myArray.slice(2,4)
(2) [5, "DF"]
myArray.slice(2)
(7) [5, "DF", "D", true, 88, "true", false]

myArray = [87, 4, 5, "DF", "D", true, 88, "true", false]
(9) [87, 4, 5, "DF", "D", true, 88, "true", false]
myArray.splice(2,0,"BMW","Audi")
[]
myArray
(11) [87, 4, "BMW", "Audi", 5, "DF", "D", true, 88, "true", false]
myArray.splice(4,1,"red","yellow")
[5]
myArray
(12) [87, 4, "BMW", "Audi", "red", "yellow", "DF", "D", true, 88, "true", false]



////
for (i=0;i<10;i++){
    console.log(i)
}


var a = [87, 4, "BMW", "Audi", "red", "yellow", "DF", "D", true, 88, "true", false]
for(i=0;i<a.length;i++){
    console.log(a[i])
}


for(i=10;i>0;i--){
    console.log(a[i])
}


var a = "javascript"

var out = ""

for(i=a.length-1;i>0;i--){
    out  += a[i]
}

console.log(out)

var a = "10"
var b = "20"

a+b

var a = "10"
var b = "20"

a+b
"1020"
parseInt(a)+parseInt(b)
30
var c= "javascript"
undefined
parseInt(a)+parseInt(c)
NaN
var a = 10
undefined
a.toString()
"10"


///

var name= prompt("pleae enter your name")
var name= prompt("pleae enter your name")
undefined
name
"hi"
var istrue = confirm("you want to leave")
undefined
istrue
true
var istrue = confirm("you want to leave")
undefined
istrue
false

we need to have array of name
we will take input from the user and verify that is user a prt of array

if user is part of array we will say allow access else  we will add push new name in array
