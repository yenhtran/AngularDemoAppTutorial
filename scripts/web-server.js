var express = require('express'),
		path = require('path'),
		app = express(),
		rootPath = path.normalize(__dirname + '/../');

app.use(express.static(rootPath + '/app'));

app.listen(8000);
console.log('Listening on port 8000...');