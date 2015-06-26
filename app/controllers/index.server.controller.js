var path = require('path');

exports.render = function(req, res) {
//	res.send('It works!!!'); //返回字符
//	res.sendFile(path.join(__dirname + '/../views/index.html')); //返回网页
//	res.json({ name : 'robert'}); //返回json
	res.render('index', {title: 'Haha'});
};

exports.splash = function(req, res) {
//	res.send('It works!!!'); //返回字符
//	res.sendFile(path.join(__dirname + '/../views/index.html')); //返回网页
//	res.json({ name : 'robert'}); //返回json
	res.render('splash', {title: 'Haha'});
};