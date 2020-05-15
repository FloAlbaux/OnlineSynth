var express = require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/',function(req, res) {							//request with nothing so send the index by default
	res.sendFile(__dirname + '/client/index.html');
});
app.use('/client',express.static(__dirname + '/client'));	


serv.listen(2000, function() {
	console.log('listening on *:2000');
});
console.log('Server started.');

var SOCKET_LIST = {};							//tableau des sockets clients

var io = require('socket.io')(serv,{});			//retourne objet avec tout pour connexion
io.sockets.on('connection', function(socket){	//quand il y a une connexion on appelle cette fonction et ya un message


});

