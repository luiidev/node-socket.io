var socket = io.connect('http://localhost:80', {forceNew: true});

socket.on('messages', function(data){
	console.log(data);
	render(data);
});

function render(data){
	var html = data.reduce(function(text, obj, i) {
		return text + ( `<div>
				<strong>${obj.name}</strong>
				<em>${obj.text}</em>
				</div>`);
	}, '');

	document.getElementById('messages').innerHTML = html;
}

function addMessage(e){
	console.log(e);
	var payload = {};
	payload.name = document.getElementById('userName').value;
	payload.text = document.getElementById('text').value;

	socket.emit('newMessage', payload);

	return false;
} 