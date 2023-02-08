const fs = require('fs');

// writng file
fs.writeFile('./welcome.txt','Hello Node',() =>{
    console.log('file was written');
});

// reading file 
fs.readFile('./hello.txt',(err,data) =>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})