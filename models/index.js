var mongoose = require('mongoose');
// using db created for project
mongoose.connect('mongodb://localhost/mobileday');

// get notified if we connect successfully or if a connection error occurs
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
});

// creating the schema. takes an object with user and message as strings
var messageSchema = mongoose.Schema({
	user: String,
	message: String
});

// exporting just message 
// making the message object available to whatever files reference (use require) mongoose. 
// Specifying model, named 'Message' collectection
// para2 - definied with the scheme by same name above
exports.Message = mongoose.model('Message', messageSchema);