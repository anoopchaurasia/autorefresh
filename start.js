var autorefresh = require('./index.js');
var ip = "172.16.1.72"; //Change ip according to your system ip
var port = 8081; //Change port
var fs = require('fs');
var server = require("http").createServer(function( req, resp ) {
            fs.readFile("./insertScript.js", function(err, data){
                data = data.toString("utf-8").replace(/___ip___/g, ip).replace(/___port___/g, port);
				resp.write(data);
				resp.end();
			});
        });
autorefresh.createSocket(server);
autorefresh.addWatch("add file or folder you want to watch");
autorefresh.addWatch("add file or folder you want to watch");
autorefresh.addWatch("add file or folder you want to watch");
server.listen(port, ip);