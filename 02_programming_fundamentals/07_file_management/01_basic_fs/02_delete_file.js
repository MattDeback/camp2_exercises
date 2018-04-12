// Add a function `deleteFile` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder).
//
// The function returns a boolean indicating if it successfully removed the file.

const fs = require('fs');
const path = require('path');


function deleteFile(path) {
  fs.unlink(path, error => {
    if (error) {
      console.warn(error);
      return; //return defensif!!
    }
    console.log("file is deleted");
  });
}

const pathTest = "/Users/Matthieu/Workspace/camp2_exercises/02_programming_fundamentals/07_file_management/Matt.txt"

deleteFile(pathTest);

module.exports = deleteFile
