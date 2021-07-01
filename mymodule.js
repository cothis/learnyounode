'use strict'
const fs = require('fs');
const path = require('path');

module.exports = function (directoryName, extension, callback) {
    fs.readdir(directoryName, (err, data) => {
        if (err) return callback(err);
        callback(null, data.filter(name => path.extname(name) === '.' + extension));
    });
};