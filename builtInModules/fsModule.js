const fileSystem = require('fs');

// readFile method

fileSystem.readFile('readme.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
});

// writeFile method

fileSystem.writeFile('index.html','utf8',(err)=>{
    if(err){
        console.log(err)
    }
    console.log('file created successfully')
})

//creating content in file index.html with writeFile method

const indexContent = 'Hi creating content inside this file'
fileSystem.writeFile('index.html',indexContent,(err)=>{
    if(err){
        console.log(err)
    }
    console.log('content creation sucess')
})
// modifying above file name to newindex.html

fileSystem.rename('index.html','newindex.html',(err)=>{
    if(err){
        console.log(err)
    }
    console.log('renamed old file name')
})

// deleting file with method unlink

fileSystem.unlink('newindex.html',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('deleted')
    }

})

//checking if a file exist

fileSystem.access('readme.txt',(err) => {
  if (err) {
    console.error('File does not exist');
  }
  console.log('File exists');
});
// listing files in the directory 
fileSystem.readdir('.', (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Files in the current directory:', files);
});

//create a directory
fileSystem.mkdir('new-directory', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Directory created');
});


