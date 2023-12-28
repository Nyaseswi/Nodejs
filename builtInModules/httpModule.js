const hyperTextTransferProtocol = require('http')

const myServer = hyperTextTransferProtocol.createServer((request,response)=>{
    response.write('created , welcome to server')
    response.end();
})
//creating a port 
myServer.listen(5500)