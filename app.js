
var http = require('http'),
    os   = require('os'),
    port = process.env.PORT || 8080;
//var express = require('express');
//var os = require('os');

//var app = express();


http.createServer(function(req, res){ 
   res.write(req.connection.remoteAddress);
   res.write(os.platform());
   res.end();
}).listen(8080, function(){
  console.log("Server listening at 8080");
});
