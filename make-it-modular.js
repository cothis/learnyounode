'use strict'
const mymodule = require('./mymodule.js');

mymodule(process.argv[2], process.argv[3], (err, data) => {
    if (err) {
        return console.error(err);
    }

    data.forEach(element => console.log(element));
});