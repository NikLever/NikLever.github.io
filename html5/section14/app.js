const express = require('express');
const app = express();
const serv = require('http').Server(app);
 
app.get('/',function(req, res) {
    res.sendFile(__dirname + '/client/index.html');
});
app.use('/client',express.static(__dirname + '/client'));
 
serv.listen(2000);
console.log("Server started.");
 
const sockets = {};
 
const io = require('socket.io')(serv,{});
io.sockets.on('connection', function(socket){
    socket.id = guid();
	socket.x = socket.y = socket.index = socket.flipped = 0;//Default values
    sockets[socket.id] = socket;
 
    socket.on('disconnect', function(){
        delete sockets[socket.id];
    });
   
	socket.emit('setId', { id:socket.id });
	
	socket.on('update', function(data){
		socket.x = data.x;
		socket.y = data.y;
		socket.index = data.index;
		socket.flipped = data.flipped;
	})
});
 
setInterval(function(){
    let pack = [];
    for(let id in sockets){
        const socket = sockets[id];
        pack.push({
			id: socket.id,
            x:socket.x,
            y:socket.y,
			index:socket.index,
            flipped:socket.flipped
        });    
    }
    for(let id in sockets){
        const socket = sockets[id];
        socket.emit('remoteData', pack);
    } 
}, 1000/25);

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}