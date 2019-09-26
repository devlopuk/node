const express = require('express'); //express var
const app = express(); //app var
const port = 1356; // port
const heroes = require('superheroes'); //superheroes package downloaded
const villains = require('supervillains'); //supervillains package downloaded
var bodyParser = require('body-parser'); //body-parser package downloaded

heroes.all;
villains.all;

app.use(express.static(__dirname + '/')); // css style sheet
app.use(bodyParser.urlencoded({extended: true})); // to get bodyParser. extended is true.

app.post('/result', function(req, res){ //gets data from page

var a = Number(req.body.num1); // calculates number 1
var b = Number(req.body.num2); // calculates number 2

var result = a + b;

res.send("<h1> The result is: " + result + "</h1>"); // finished result

});

app.post('/superresult', function(req, res){ //gets data from page

var firstname = req.body.firstname; // gets first name from person
var lastname = req.body.lastname; // gets last name from person


res.send("<h1> Hello, " + firstname + " " + lastname + " <br>Your superhero name is: " + heroes.random() + "<br> Stay away from the villan: " + villains.random() + "<br><br><a href='super-hero.html'>Let's try again!</a></h1>");

}); // finished result




app.get('/', function(req, res){
res.sendFile(__dirname + '/index.html'); // pulls index.html
});

app.get('/heros', function(req, res){ //superheroes folder
res.send(heroes.random()); //superheroes random name
});

app.get('/villains', function(req, res){ //supervillains folder
res.send(villains.random()); //supervillains random name
});

app.listen(port, function(){
console.log("Application is running on port");
});
