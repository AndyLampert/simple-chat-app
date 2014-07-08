var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')( http);

var db = require('./models');

// creates socket connection
io.on('connection', function(socket){
	console.log("socket test");
});

// broadcasts a message to everyone except the socket that starts connection
io.sockets.on('connection', function (socket) {
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

http.listen(3000, function(){
	console.log("Listening on port 3000");
});