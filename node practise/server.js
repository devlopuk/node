const express = require('express'); //express is a var
const app = express(); //app is a var
const port = 1356; // don't change port name

app.get('/', function(req, res){

res.send("<h1> Hello World 2</h1>"); //response from server

});

app.get('/about', function(req, res){ // use /about in localhost
res.send("my email address is: markm8531@gmail.com");

});

app.get('/contactme', function(req, res){ // use /contactme in localhost
res.send("feel free to contact me");

});

app.listen(port, function(){
console.log("Application is running on port"); //text showing it works
});
