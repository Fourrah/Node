const fs = require('fs');
const path = require('path');

const directoryPath = '/Users/Sara/myStudyRoom/node/chapter7/pictures/test';

if(!directoryPath) {
    console.error;
}

fs.readdir(directoryPath, function (err, files) {
    if(err) {
        console.error;
    }

    files.forEach((file) => {
        console.log(file);
    })

    folderAdd('video', files);
    folderAdd('captured', files);
    folderAdd('duplicated', files);
});

const folderAdd = (folderName, files) => {
    if(!files.includes(folderName)) {
        fs.mkdir(path.join(directoryPath, folderName), (err) => {
            if(err) {
                console.error;
                return;
            } 
            console.log(`${folderName} 폴더가 생성되었습니다.`);
        });
    } else {
        console.log(`${folderName} 폴더가 이미 존재합니다.`);
    }
}


