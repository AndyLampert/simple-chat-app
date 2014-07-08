$(document).ready(function(){

	// io() with no args does auto-discovery
	var socket = io();
	
	// this is an example notification
	// param1 - title of the notification (string)
	// param2 - object of settings (optional)
	var notification = new Notification('Email received', {
		body: 'You have a total of 3 unread emails'
	});


	$('#chat-input').on('click', '.send-btn', function(e){
		console.log("input submitted");
		e.preventDefault();
		// TODO: 
		// get the value of text area
		// post it to mongoose
	})

	// func that broadcasts via sockets
	var sendMessage = function(){

	}

	// func that saves the message to mongoose
	var saveMessage = function(){

	}

	// add notifications?
	var sendNotification = function(){
		// on click (or submit?) of input, send notification
	} 

});