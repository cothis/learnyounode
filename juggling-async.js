'use strict'
const http = require('http');
const { callbackify } = require('util');
const urls = process.argv.slice(2, 5);

let results = ['', '', ''];
let count = 0;

urls.forEach((url, index) => {
    http.get(url, (response) => {
        response.setEncoding('utf8');
        response.on('data', data => {
            results[index] += data;
        });
        response.on('end', () => {
            if (++count === 3) {
                results.forEach(result => console.log(result));
            } 
        });
    });
});