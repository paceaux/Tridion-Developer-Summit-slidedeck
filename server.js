//imports
var express = require('express'),
	fs = require('fs'),
	app = express();

//website variables
var port = 80,
	directory = '/TDS',
	content = '/preso-content',
	defaultPage = '/presentation.html';

app.configure(function() {
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.static(__dirname + directory));
	app.use(express.errorHandler({
		dumpExceptions: true,
		showStack: false
	}));
	app.use(app.router);
});

app.get('/', function(req, res) {
	if (req.query) {
		console.log('got a query');
	}
	res.redirect(defaultPage);
	res.location('http://presentation');

});
app.listen(port);
console.log("listening on port %s", port);