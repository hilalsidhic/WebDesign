function add(num1,num2,callback){
    var err=false
    if(num1==0){
        err=true
    }  
    callback(num1+num2,err)
    
}
function multiply(num1,num2,callback){
    
    callback(num1*num2)

}
function division(num1,num2,callback){
    callback(num1/num2)
}
function subs(num1,num2,callback){
    callback(num1-num2)
}


add(15,20,(sum,err)=>{
    if(err){
        console.log("first number is 0")
    }
    else{
    console.log(sum)
    multiply(sum,sum,(product)=>{
        console.log(product)
        division(product,10,(quotient)=>{
            console.log(quotient)
            subs(product,quotient,(diff)=>{
                console.log(diff)
            })
        })
    })
    }
})