var http = require ("http");

http.createServer(function(req,res){
    //send the http header 
    //http status : 200 : OK 
    // content Type : text /html
    res.writeHead(200,{"content-Type" : "text/html"});
    // send the response body
    res.end( '<h1>Hello Node!!!!</h1>\n')

}).listen(3000);

console.log("server running at http://127.0.0.1:3000/");