var express = require('express');
var bodyParser = require('body-parser');

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
io.on('connection', function(){ /* … */ });

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database');

// get notified if we connect successfully or if a connection error occurs
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  // yay!
});

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('index');
});

server.listen(3000, function(){
	console.log("Listening on port 3000");
});