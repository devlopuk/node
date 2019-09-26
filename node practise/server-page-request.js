const express = require('express'); //express is a var
const app = express(); //app is a var
const port = 1356; // don't change port name

app.get('/', function(req, res){ // use /about in localhost
res.sendFile(__dirname + '/index.html'); // takes you to index.html

});

app.get('/contact', function(req, res){ // use /contact in localhost
res.sendFile(__dirname + '/contact.html'); // takes you to contact.html

});

app.get('/location', function(req, res){ // use /location in localhost
res.sendFile(__dirname + '/location.html'); // takes you to location.html

});

app.listen(port, function(){
//console.log("Application is running on port"); //text showing it works
});
