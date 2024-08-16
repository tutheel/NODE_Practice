const fs = require("fs");

//Create New Directory
// fs.mkdir("./files/newDir", err => {
//   if (err) throw err;
//   console.log("Directory Created");
// });

//Check if the File exits
// if (!fs.existsSync./files/newDir")) {
//   fs.mkdir("./files/newDir", err => {
//     if (err) throw err;
//     console.log("Directory Created");
//   });
// }

//remove if the directory exits
if (fs.existsSync("./files/newDir")) {
  fs.rmdir("./files/newDir", err => {
    if (err) throw err;
    console.log("Directory Removed");
  });
}
