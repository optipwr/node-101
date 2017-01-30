var http = require("http");
var fs = require("fs");

function renderHomePage(req, res){
	res.writeHead(200, {'content-type': 'text/html'});
	var theHomePageHTML = fs.readFileSync('homePage.html');
	res.end(theHomePageHTML);
}

function renderCss(req, res){
	var css = fs.readFileSync('styles.css');
	res.writeHead(200, {'content-type': 'text/css'});
	res.end(css, 'binary');
}

function renderJs(req, res){
	var jsFile = fs.readFileSync('scripts.js');
	res.writeHead(200, {'content-type': 'text/javascript'});
	res.end(jsFile, 'binary');
}

function renderFourOhFour(req, res){
	res.writeHead(404, {'content-type': 'text/html'});
	var theErrorHTML = fs.readFileSync('error.html');
	res.end(theErrorHTML);
}

function secret(req, res){
	res.writeHead(403, {'content-type': 'text/html'});
	res.end('This is a secret area');
}

function badApi(req, res){
	res.writeHead(400, {'content-type': 'text/html'});
	res.end('BAD API KEY');
}

var server = http.createServer((req, res)=>{

	if(req.url === '/'){
		// cut and put in a function called renderHomePage
		renderHomePage(req, res);
	}
	else if(req.url === '/styles.css'){
		renderCss(req, res);
	}
	else if(req.url === '/scripts.js'){
		renderJs(req, res);
	}
	else if(req.url === '/secret'){
		secret(req, res);
	}
	else if(req.url === '/api'){
		badApi(req, res);
	}
	else{
		renderFourOhFour(req, res);
	}

});

server.listen(8000);