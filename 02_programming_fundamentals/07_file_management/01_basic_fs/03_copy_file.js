// Add a function `copyPaste` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder). We don't want to override a file if
// it already exists.
//
// The function returns a boolean indicating if it successfully removed the file.

const fs = require("fs")
const path = require('path')


function Isafile () {
const stats = fs.lstatSync (path);
return stats.isFile ();
}


function copyPaste (sourceFilename, targetFilename) {
  fs.readFile(sourceFilename, (error, data) => {
  if (error) {
    console.warn(error);
    return;
  }

  fs.writeFile(targetFilename, data, error => {
    if (error) {
      console.warn(error);
      return;
    }
  });

});
}

//créer les 2 fichiers avant le test!
copyPaste(text.txt; test2.txt)









module.exports = copyPaste;
