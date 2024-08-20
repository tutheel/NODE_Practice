const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const logEvents = async message => {
  const logItem = `${format(new Date(),"yyyy-MM-dd\tHH:mm:ss")}\t${uuid()}\t${message}\n`;
  console.log(logItem);
  try {
    if (!fs.existsSync(path.join(__dirname,'logs'))){
        await fsPromises.mkdir(path.join(__dirname,'logs'))
    }
    // if (!fs.existsSync(path.join(__dirname,'logs','events.js'))){
    //     await fsPromises.writeFile(__dirname,'logs','events.js')
    // }
    //testing
    await fsPromises.appendFile(path.join(__dirname, "logs", "eventLog.txt"),logItem);
  } catch (error) {
    console.error(error);
  }
};

module.exports = logEvents;
