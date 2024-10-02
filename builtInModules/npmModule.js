const HTTP = require('http');
const notifier = require('node-notifier');

HTTP.createServer((request, response) => {
    // Display a desktop notification
    notifier.notify({
        title: 'Server Status',
        message: 'Server created successfully on port number 1000'
    });

    response.write('Server is running and notifications are working!');
    console.log('Server created successfully on port number 1000');
    response.end();
}).listen(1000);

// Notify when server starts
notifier.notify({
    title: 'Server Listening',
    message: 'Server is listening on port 1000'
});
