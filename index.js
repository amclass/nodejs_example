var http=require("http");

var server=http.createServer(function(request,response){
response.writeHead(200,{'Content-type':'text/html'});
response.end("<h1>hello web setver with node</h1>");
});


server.on("request",function(code){
  console.log("request code : ");
});

server.on("connection",function(code){
  console.log("connection code : ");
});

server.on("close",function(code){
  console.log("close code : ");
});
server.listen(9998);
