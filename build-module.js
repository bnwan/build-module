'use strict';

var b = require('browserify')();
var fs = require('fs');

var api = {
	bundle: function(options){
		b.add(options.root);
		b.bundle(function (err, code) {
		    fs.writeFileSync(options.name + '.bundle.js', code);
		});
	}
};


module.exports = {
	bundle: function(options){
		api.bundle(options);
	}
};