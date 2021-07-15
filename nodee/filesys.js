var http=require('http')
var fs=require('fs')
var url=require('url')



http.createServer(function (req,res){
    var q=url.parse(req.url,true)
    if(req.url==='/'){
    fs.readFile('sample.html',function (err,data){
        res.writeHead(200,{'cont-Type':"text/html"})
        res.write(data)
        res.end()
    })}
    else if(req.url==='/details')
    {
        fs.readFile('detail.html',function (err,data){
            res.writeHead(200,{'cont-Type':"text/html"})
            res.write(data)
            res.end()
    })   
    }
    else if(q.pathname==='/actionpage'||req.url==='/actionpage.html')
    {
        fs.readFile('actionpage.html',function (err,data){
            res.writeHead(200,{'cont-Type':"text/html"})
            res.write(data)
            res.end()
    })   
    }
    else{
        res.write('cant access')
        res.end()
    }
}).listen(7000,function (){
    console.log('server started')
})