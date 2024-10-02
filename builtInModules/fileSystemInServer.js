const FileSystemServer = require('fs');
const httpModule = require('http');

const FSServer = httpModule.createServer((request, response) => {
    response.write('created server for file system\n');

    // First, read the file
    FileSystemServer.readFile('readme.txt', 'utf8', (err, data) => {
        if (err) {
            response.write(err.toString());
            response.write('File not found, creating new one...\n');
        } else {
            response.write(data + '\n'); // Write the file content
        }

        // After reading, append to the file
        FileSystemServer.appendFile('readme.txt', 'Thank You\n', (err) => {
            if (err) {
                response.write(err.toString());
            } else {
                response.write('File updated successfully\n');
            }

            // After appending, override the content in the file
            FileSystemServer.writeFile('readme.txt', 'OverRiding', (err) => {
                if (err) {
                    response.write(err.toString());
                } else {
                    response.write('File content overridden successfully\n');
                }

                // End the response after all operations are done
                response.end();
            });
        });
    });
});

FSServer.listen(8800, () => {
    console.log('Server is running on port 8800');
});
