// const fs = require("fs");
const path = require("path");
//using promises to avoid callback hell
const fsPromise = require("fs").promises;

//******************* READ FILE *****************/
// fs.readFile("./files/starter.txt", (err, data) => {
//   if (err) throw err;

//   // console.log(data); // ==> output = <Buffer 48 65 6c 6c 6f 2c 20 49 27 6d 20 53 75 73 68 69 6c>
//   // console.log(data.toString()); // ==> output = Hello, I'm Sushil
// });

// fs.readFile("./files/starter.txt", "utf8", (err, data) => {
//   if (err) throw err;

//   console.log(data); // ==> output = Hello, I'm Sushil
// });

//Exit on Uncaught Errors added wrong file name
// fs.readFile("./files/module.txt", "utf8", (err, data) => {
//   if (err) throw err;

//   console.log(data); // ==> output = Hello, I'm Sushil
// });

// console.log("Hello!");

// process.on("uncaughtException", error => {
//   console.error(`there was an uncaught error: ${error}`);
//   process.exit(1);
// });

//output ==> there was an uncaught error: Error: ENOENT: no such file or directory, open 'K:\NodeJs\File System\files\module.txt'

//using PATH lib instaead of hard coding the path (already imported on top)
// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"), //for terminal User folder path where your server.js file is located.(eg: {dir}/NODEJS/FileSystem>)
//   "utf8",
//   (err, data) => {
//     if (err) throw err;

//     console.log(data); // ==> output = Hello, I'm Sushil
//   }
// );

//*************** WRITE FILE ***************/
// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"), //for terminal User folder path where your server.js file is located.(eg: {dir}/NODEJS/FileSystem>)
//   "Nice to meet you!",
//   err => {
//     if (err) throw err;

//     console.log("Operation complete"); // ==> output = Hello, I'm Sushil
//   }
// );

//*************** Updating a FILE ***************/
// fs.appendFile(
//   path.join(__dirname, "files", "test.txt"), //for terminal User folder path where your server.js file is located.(eg: {dir}/NODEJS/FileSystem>)
//   "testing text 2",
//   err => {
//     if (err) throw err;

//     console.log("append complete"); // ==> output = Hello, I'm Sushil
//   }
// );

//*******************WRITE & UPDATE FILE */
// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"), //for terminal User folder path where your server.js file is located.(eg: {dir}/NODEJS/FileSystem>)
//   "Nice to meet you!",
//   err => {
//     if (err) throw err;
//     console.log("Operation complete"); // ==> output = Hello, I'm Sushil
//     fs.appendFile(
//       path.join(__dirname, "files", "reply.txt"), //for terminal User folder path where your server.js file is located.(eg: {dir}/NODEJS/FileSystem>)
//       "\nHow are you?",
//       err => {
//         if (err) throw err;

//         console.log("append complete"); // ==> output = Hello, I'm Sushil
//       }
//     );
//   }
// );

//*******************RENAME FILE */
// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"), //for terminal User folder path where your server.js file is located.(eg: {dir}/NODEJS/FileSystem>)
//   "Nice to meet you!",
//   err => {
//     if (err) throw err;
//     console.log("Operation complete");

//     fs.appendFile(
//       path.join(__dirname, "files", "reply.txt"),
//       "\n\nHow are you?",
//       err => {
//         if (err) throw err;

//         console.log("append complete");

//         fs.rename(
//           path.join(__dirname, "files", "reply.txt"),
//           path.join(__dirname, "files", "newReply.txt"),
//           err => {
//             if (err) throw err;

//             console.log("Rename complete");
//             // ==> output = Hello, I'm Sushil
//           }
//         );
//       }
//     );
//   }
// );

/********************************PROMISED OPERATIONS ***************/
const fileOps = async () => {
  try {
    const data = await fsPromise.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf-8"
    );
    console.log(data);

    //write new file
    await fsPromise.writeFile(
      path.join(__dirname, "files", "promisedWrite.txt"),
      data
    );
    console.log("Write complete");

    //append
    await fsPromise.appendFile(
      path.join(__dirname, "files", "promisedWrite.txt"),
      "\n\n Nice to meet you"
    );
    console.log("Append Complete");

    //rename
    await fsPromise.rename(
      path.join(__dirname, "files", "promisedWrite.txt"),
      path.join(__dirname, "files", "renamePromisedWrite.txt")
    );
    console.log("Rename Complete");
  } catch (error) {
    console.error(error);
  }
};

fileOps();
