var http=require('http')
http.createServer(server).listen(7000,function (){
    console.log('server started')
})
function server(req,res){
    res.write('hello')
    res.end()
}