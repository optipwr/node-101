var http = require("http");

var server = http.createServer((req, res)=>{

	res.writeHead(200, {'content-type': 'text/html'});
	res.end("<h1>Hello, Friend. This is your node server.</h1>")
});

console.log("Server listening on port 8000 for connections...")
server.listen(8000);