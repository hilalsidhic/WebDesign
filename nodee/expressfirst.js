const express=require('express')
const { writeFile } = require('fs')
const path=require('path')

const app=express()

app.get('/login',function (req,res){
    res.sendFile(path.join(__dirname,'sample.html'))  
})
app.post('/login',function (req,res){
    res.send('success')
})


app.listen(3200,function (){
     console.log('server started')
     console.log(__dirname)
})