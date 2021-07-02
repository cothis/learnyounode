'use strict'
const net = require('net');

function zeroFill(i) {
    return (i < 10 ? '0' : '') + i;
}

const port = parseInt(process.argv[2]);
const server = net.createServer(socket => {
    // socket handling logic
    const date = new Date();
    
    let data = date.getFullYear();
    const month = date.getMonth() + 1;
    const dayOfMonth = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    data = `${date.getFullYear()}-${zeroFill(month)}-${zeroFill(dayOfMonth)} ${zeroFill(hours)}:${zeroFill(minutes)}\n`;
    socket.end(data);
});
server.listen(port);