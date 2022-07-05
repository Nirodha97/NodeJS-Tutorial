var http = require('http');
var fs = require('fs');

function renderHtml(request,response){

    response.writeHead(200,{'Content-Type':'text/html'});
    fs.readFile('./index.html',null,function(error,data){
        if(error){
            response.writeHead(400);
            response.write("Error Not Found");
        }
        else{
            response.write(data)
        }
        response.end();
    });

}



http.createServer(renderHtml).listen(8000);