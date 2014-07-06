var express = require('express');
var bodyParser = require('body-parser');
var db = require('./models');
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
io.on('connection', function(){ /* … */ });

// takes callback function, lets us throw error
// message -> JSON object of everything inside that collection
db.Message.find(function(err, messages) {
	if (err) {
		console.error(err);
	} else {
		console.log(messages);
	}
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