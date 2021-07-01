'use strict'
const fs = require('fs');

const directoryName = process.argv[2];
const extension = '.' + process.argv[3];

fs.readdir(directoryName, (err, list) => {
    if (err) {
        throw err;
    }

    const files = list.filter(name => name.endsWith(extension));
    files.forEach(f => console.log(f));
})
