const { resolve, reject } = require('promise')
const Promise=require('promise')

function add(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num1==0)
        {
            reject("error")
        }

        resolve((num1+num2))
       
    })
}
function multiply(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num1==0)
        {
            reject("errors")
        }


        resolve((num1*num2))

    })
}
function division(num1,num2){
    return new Promise((resolve,reject)=>{

        resolve((num1/num2))

    })
}

add(10,20).then((sum)=>{
    console.log(sum)
    return multiply(0,sum)
}).then((product)=>{
    console.log(product)
    return division(product,10)
}).then((quotient)=>{
    console.log(quotient)
}).catch((err)=>{
    console.log(err)
}).catch((err2)=>{
    console.log(err2)
})