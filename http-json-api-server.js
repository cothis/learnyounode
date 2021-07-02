'use strict'
const http = require('http');
const url = require('url');
const port = Number(process.argv[2]);

http.createServer((req, res) => {
    if (req.method === 'GET') {
        const reqUrl = new URL(req.url, 'http://127.0.0.1');
        const pathName = reqUrl.pathname;
        const searchParams = reqUrl.searchParams;

        const iso = searchParams.get('iso')
        const date = new Date(iso);
        const result = {};

        if (pathName === '/api/parsetime') {
            result.hour = date.getHours();
            result.minute = date.getMinutes();
            result.second = date.getSeconds();
        } else if (pathName === '/api/unixtime') {
            result.unixtime = date.getTime();
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    }
}).listen(port);