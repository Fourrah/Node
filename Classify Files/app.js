const fs = require("fs");
const path = require("path");

const directoryPath = "/Users/Sara/myStudyRoom/node/chapter7/pictures/test";

if (!directoryPath) {
  console.error;
}

//디렉토리에 있는 파일들 읽어오기
fs.readdir(directoryPath, function (err, files) {
  if (err) {
    console.error;
  }

  folderAdd("video", files);
  folderAdd("captured", files);
  folderAdd("duplicated", files);

  moveFile(files);
});

//폴더 생성하기
const folderAdd = (folderName, files) => {
  if (!files.includes(folderName)) {
    fs.mkdir(path.join(directoryPath, folderName), (err) => {
      if (err) {
        console.error;
        return;
      }
      console.log(`${folderName} 폴더가 생성되었습니다.`);
    });
  } else {
    console.log(`${folderName} 폴더가 이미 존재합니다.`);
  }
};

//파일 분류 후 폴더로 이동
const moveFile = (files) => {
  files.forEach((file) => {
    let temp = file.split(".");
    if (temp[1] === "mov" || temp[1] === "mp4") {
      fs.rename(
        path.join(directoryPath, file),
        path.join(directoryPath, "video", file),
        (err) => {
          if (err) {
            console.error;
          }
          console.log(`${file} 파일을 video 폴더로 이동했습니다.`);
        }
      );
    } else if (temp[1] === 'png' || temp[1] === 'aae') {
        fs.rename(
            path.join(directoryPath, file),
            path.join(directoryPath, "captured", file),
            (err) => {
              if (err) {
                console.error;
              }
              console.log(`${file} 파일을 captured 폴더로 이동했습니다.`);
            }
        );
    } else {
        fs.stat(path.join(directoryPath,file), (err, stats) => {
            if(err) {
                console.error;
            }
            if(stats.isFile() && !(file.includes("_E"))) {
                fs.rename(
                    path.join(directoryPath, file),
                    path.join(directoryPath, "duplicated", file),
                    (err) => {
                        if (err) {
                        console.error;
                        }
                        console.log(`${file} 파일을 duplicated 폴더로 이동했습니다.`);
                    }
                );
            }
        });
    }
  });
};
