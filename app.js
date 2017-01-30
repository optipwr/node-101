// Include the http module. It's part of core, so no npm install needed
var http = require("http");
// Include the fs module. FS = file system. It is part of core.
var fs = require("fs");

function renderHomePage(req, res){
	res.writeHead(200, {'content-type': 'text/html'});
	var theHomePageHTML = fs.readFileSync('homePage.html');
	res.end(theHomePageHTML);

	// This is the manual way without FS below...
	// someone came to our home page! Give them the homepage content
	// res.write('<h1>This is the home page.</h1>');
	// res.write('<p>I am very proud of my node routing ability</p>');
	// res.write('<p>I made a page in node. So there.</p>');
	// res.end();
}

// Set up an http server and store it in the server var
// The callback will run anytime someone hits the port.
// The server is listening too.
var server = http.createServer((req, res)=>{
	// This function is run everytime someone makes an HTTP request to this server
	console.log("Someone connected to our server!");
	// The URL requested is in the req object, url property
	console.log(req.url);

	if(req.url === '/'){
		// cut and put in a function called renderHomePage
		renderHomePage(req, res);
	}
	else if(req.url === '/logo.png'){
		// the request is for the image. Serve it up
		var img = fs.readFileSync('logo.png');
		res.writeHead(200, {'content-type': 'image/png'});
		res.end(img, 'binary');
	}
	else{
		res.writeHead(404, {'content-type': 'text/html'});
		res.end('Sorry. This page does not exist.');
	}

	// res.end will close the connection so the browser knows we are done
	// res.end("Sanity Check");
});

// Tell the server we created to listen to port 8000
// Whenever anyone makes at HTTP request to this computer at port 8000,
// the callback will fire
server.listen(8000);
console.log("Server is listening for HTTP traffic at port 8000...")
