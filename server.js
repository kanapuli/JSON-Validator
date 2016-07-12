//BASE SETUP
//-----------------------
//CALL THE PACKAGAES
var  express = require('express');
var app = express();
var path = require('path');
 
 

//ROUTES FOR THE API
app.get('/' , function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

 

 
//START THE SERVER
app.listen(8080);
console.log('Listening to  8080');