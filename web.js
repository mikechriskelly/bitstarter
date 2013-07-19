var fs = require('fs');

var express = require('express')
  , path = require('path');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {  
    response.send(fs.readFileSync('./index.html').toString('utf-8'));
});

app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
});
