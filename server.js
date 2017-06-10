var	express  = require('express');
var fs = require('fs');
var path = require('path');
var bp = require('body-parser');



var root = __dirname;
var port = process.env.PORT || 8000;
var app = express();

app.use(bp.json());

app.use(express.static(path.join(root, 'client')));

require('./server/routes.js')(app);

var server = app.listen(port, function() {
	console.log(`server running on port ${ port }`);
});