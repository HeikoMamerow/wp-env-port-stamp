// Writes .wp-env.json file with port numbers created from current timestamp.

const fs = require('fs');
const path = require('path');
const absPath = path.resolve() + '/.wp-env.json';
const timestamp = Date.now();
const timestampSliced = num => +(num + '').slice(-4); // Last 4 numbers from timestamp.
const port = timestampSliced(timestamp);
const testsPort = port + 1;
const content = '{\n' + '  "port": ' + port + ',\n' + '  "testsPort": ' + testsPort + '\n' + '}';

exports.wpEnvPortStamp = function () {
	fs.writeFile(absPath, content, err => {
		if (err) {
			console.error(err);
		}
	});
}