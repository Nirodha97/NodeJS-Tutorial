var http = require('http');
var module1 =  require('./module1');
var module2 =  require('./module2');

function onRequest(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write(module2.myVariable);
    module2.myfunction();
    response.end();
}

http.createServer(onRequest).listen(8000);



//Anonymous Function

// http.createServer(function (request,response){
//     response.writeHead(200,{'Content-Type':'text/plain'});
//     response.write(module2.myVariable);
//     module2.myfunction();
//     response.end();
// }).listen(8000);