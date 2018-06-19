var a = 10
if(a%2 ==0){
    console.log("number is even")
}
else{
    console.log("number is odd")
}
=================

if(a%2 ==0){
    console.log("number is even")
}else if(a%3==0 || a%5==0){
    console.log("number is divisible by 3 or 5")
}
else{
    console.log("number is odd")
}


if(a%2 ==0){
    console.log("number is even")
}else if(a%3==0 && a%5==0){
    console.log("number is divisible by 3 or 5")
}
else{
    console.log("number is odd")
}

////////////////////////////////////////////////
var a = 10
switch(a>10){
    case true:
        console.log("i am in first case")
        break;
    case false:
        console.log(" i am in second case")
        break;
    default:
        console.log(" i am in default case")
}