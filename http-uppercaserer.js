'use strict'
const http = require('http');
const map = require('through2-map');
const port = Number(process.argv[2]);
let data = '';

http.createServer((req, res) => {
    if (req.method.toUpperCase() !== 'POST') {
        return;
    }

    req.setEncoding('utf8');

    req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res);
}).listen(port);