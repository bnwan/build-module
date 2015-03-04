'use strict';

var b = require('browserify')();
var fs = require('fs');

var api = {
	bundle: function (options) {
		if (!options) {
			options = {};
		}

		b.add(options.root);

		if (Array.isArray(options.transforms)) {
			options.transforms.each(function (transform) {
				b.transform(transform);
			});
		}

		b.bundle(function (err, code) {
			fs.writeFileSync(options.name + '.bundle.js', code);
		});
	}
};


module.exports = {
	bundle: function (options) {
		api.bundle(options);
	}
};