const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message, logFileName) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

    try {
        //checking if the file exits or not
        if (!fs.existsSync(path.join(__dirname,'..', 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname,'..', 'logs'));
        }
        //append the content to the file
        await fsPromises.appendFile(path.join(__dirname,'..', 'logs', logFileName), logItem);
    } catch (err) {
        console.log(err);
    }
}

module.exports = logEvents;
