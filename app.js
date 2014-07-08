var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');
var app = express();
var http = require('http').Server(app);
// creating an http server
var io = require('socket.io')(http);
var db = require('./models');

// creates socket connection, from http://socket.io/docs/
// io.on('connection', function(socket){
// 	// successfully logging message on server
// 	console.log("socket test");
// 	io.emit('this', { 
// 		will: 'be received by everyone!'
// 	});

// 	socket.on('private message', function(from, message) {
// 		console.log('I received a private message by ', from, ' saying ', message);
// 	});

// 	socket.on('disconnect', function(){
// 		io.sockets.emit('user disconnected');
// 	});
// });

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

// broadcasts a message to everyone except the socket that starts connection
io.sockets.on('connection', function (socket) {
  console.log('socket test 2');
  socket.broadcast.emit('user connected');
});

// takes callback function, lets us throw error
// message -> JSON object of everything inside that collection
db.Message.find(function(err, messages) {
	if (err) {
		console.error(err)
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


// seems like this is need for heroku
var port = process.env.PORT || 3000;
http.listen(3000, function(){
	console.log("Listening on port 3000");
});