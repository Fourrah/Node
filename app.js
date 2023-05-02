const fs = require('fs');
const path = require('path');

const directoryPath = '/Users/Sara/myStudyRoom/node/chapter7/pictures/test'

fs.readdir(directoryPath, function (err, files) {
    if(err) {
        console.log(err);
    }

    files.forEach((file) => {
        console.log(file);
    })
})