var read=require("readline-sync")

var num1=read.question("enter two numbers")
var num2=read.question("")

if(num1>num2)
{
    console.log(" greater number is"+num1)
}
else if(num1<num2){
    console.log(" greater number is"+num2)
}
else{
    console.log("equal")
}