const express = require('express'); //express is a var
const app = express(); //app is a var
const port = 1356; // don't change port name
const heroes = require('superheroes'); //superheroes package downloaded
const villains = require('supervillains'); //supervillains package downloaded

heroes.all;
villains.all;

app.use(express.static(__dirname + '/')); // css style sheet

app.get('/', function(req, res){
res.sendFile(__dirname + '/index.html');
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
