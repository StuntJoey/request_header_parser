
'use strict';

var express    = require('express');        
var app        = express();                
var details    = require('./app/controllers/details.js');
    
    
app.get('/', details.info);


var port = process.env.PORT || 8080; 
app.listen(port, function() {
    console.log('Node.js listening on port ' + port);
});