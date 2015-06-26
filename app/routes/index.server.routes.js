var logger = function(req, res, next) {
	console.log('%s %s', req.method, req.url);
	next();
}

module.exports = function(app) {
	var index = require('../controllers/index.server.controller');
	
	app.use(logger);
	app.get('/', index.render);
	app.get('/splash', index.splash);
}