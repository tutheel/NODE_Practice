const fs = require("fs");

//Readable Stream
const rs = fs.createReadStream("./files/lorem.txt", { encoding: "utf-8" });

const ws = fs.createWriteStream("./files/newLorem.txt");

//COPY DATA - 1
// rs.on("data", chunk => {
//   ws.write(chunk); // Prints each chunk of data to the designated file
// });

//COPY DATA - 2 -more Efficient Way
rs.pipe(ws);
