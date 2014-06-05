var chokidar = require("hound");
process.on('uncaughtException', function( err ) {
    console.error(err.stack, err);
});
function register(){
	var io;
	this.addWatch = function(dir){
        console.log(dir);
		var watcher = chokidar.watch(dir);//, {ignored: /((.*?)(.tmp))/i, persistent: true, usePolling : true});

        watcher.on('create', function(path) {informClient(path); console.log('File', path, 'has been added');});
        watcher.on('change', function(path) {informClient(path); console.log('File', path, 'has been changed');});
        watcher.on('delete', function(error) {console.error('Error happened', error);});
	};

	function informClient(filepath){
		var sockets = io.sockets.sockets;
		sockets.forEach(function(socket){
			socket.emit("filerefresh", {filepath: filepath});
		});
	}


	this.createSocket = function(server) {
        io = require('socket.io').listen(server);
        io.sockets.on('connection', function (socket){
            console.log("socket connected");
		});
    };
}
module.exports = new register();