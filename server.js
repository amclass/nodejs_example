var fs=require("fs");
var http=require("http");
var server=http.createServer(function(request,response){
fs.readFile("HtmlPage.html",function(error,data){
  response.writeHead(200,{'Content-type':'text/html'});
  response.end(data);
})
});

server.listen(52273,function(){
  console.log("server running at http://localhost:52273");
});


var server=http.createServer(function(request,response){
fs.readFile("nodejs_logo.png",function(error,data){
  //불러오는 형식에 따른
  response.writeHead(200,{'Content-type':'image/png'});
  response.end(data);
})
}).listen(52274,function(){
  console.log("server running at http://localhost:52274");
});

//쿠키생성
var server=http.createServer(function(request,response){
  var date=new Date();
  date.setDate(date.getDate()+7);
  response.writeHead(200,
    {'Content-type':"text/html",
    'Set-Cookie':[
      'breakfast=toast;Expires='+date.toUTCString(),
      'dinner=chicken'
    ]}
  );
  response.end("<h1>"+request.headers.cookie+"</h1>");
}).listen(52275,function(){
  console.log("server running at http://localhost:52275");
});

//302 페이지 이동
var server=http.createServer(function(request,response){
  console.log("52276");
  response.writeHead(302,
    {'Location':"http://localhost:52274"}
  );
  response.end();
}).listen(52276,function(){
  console.log("server running at http://localhost:52276");
});
