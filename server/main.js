var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var messages = [{id: 1, text: 'Ola k ase', name: 'Luii'}];

app.use(express.static('public/'));

// app.get('/', function(req, res){
// 	res.status(200).send('Hello world !');
// });

io.on('connection', function(socket) {
	console.log('alguien se conecto con socket');
	socket.emit('messages', messages);
	socket.on('newMessage', function(data){
		messages.push(data);
		io.emit('messages', messages);
	});
});

server.listen(80, function(){
	console.log('Server run in port 80');
});