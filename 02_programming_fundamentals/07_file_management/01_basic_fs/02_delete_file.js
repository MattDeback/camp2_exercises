// Add a function `deleteFile` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder).
//
// The function returns a boolean indicating if it successfully removed the file.

const fs = require('fs');
const path = require('path')
const pathFile = "/Users/Matthieu/Workspace/camp2_exercises/02_programming_fundamentals/07_file_management/Matt.txt"


function deleteFile (path) {

  fs.unlink(path, error => {
     (error) {
      console.warn(error);
      return;
    }
    console.log("File deleted!");
  });

}

deleteFile(pathFile)

}

function Isafile () {
stats.isFile(pathFile)


}
