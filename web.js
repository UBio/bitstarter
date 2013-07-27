var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

fs.readFile('index.html', function (err, data) {
  if (err) throw err;
	app.get('/', function(request, response) {
		//var buffer = new Buffer(data, "utf-8")
		response.send(data.toString('utf-8'));
	});
  console.log(data);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
