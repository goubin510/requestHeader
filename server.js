var express = require('express')
var app = express()

var port = 8080;

app.get('/', function(req, res) {
	console.log(req.headers);
	var json = {};
	json.ipaddress = req.headers.host;
	json.language = req.headers["accept-language"];
	json.userAgent = req.headers["user-agent"];

	res.send(JSON.stringify(json))
})

app.listen(port, function () {
  	console.log("server running on : http://localhost:" + port)
})
