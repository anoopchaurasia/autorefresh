function SocketManager(io) {
	var socket = io.connect("http://___ip___:___port___");
	socket.on('filerefresh', function (data) {
		location.reload(true);
	});
};
$.ajax({
	url:"http://___ip___:___port___/socket.io/socket.io.js",
	dataType: "script",
	cache: true,
	success: function () {
		SocketManager(window.io);
	},
	error: function (jqxhr, settings, exception) {
		SocketManager();
	}
});