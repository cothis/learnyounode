'use strict'
const http = require('http');
const port = Number(process.argv[2]);

http.createServer((req, res) => {
    if (req.method.toUpperCase() !== 'POST') {
        return;
    }

    req.setEncoding('utf8');
    req.on('data', chunk => {
        res.write(chunk.toString().toUpperCase());
    })
    req.on('end', () => res.end());
}).listen(port);