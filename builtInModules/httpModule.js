const hyperTextTransferProtocol = require('http')

const myServer = hyperTextTransferProtocol.createServer((request, response) => {
    response.write(request.url)
    response.write(' created , welcome to server');
    response.end();
    console.log('Served created with port number 5500')
})
//creating a port 
myServer.listen(5500)