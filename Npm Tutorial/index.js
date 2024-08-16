//you can go to https://npmjs.com to know more about below packages
const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

//Using "Format" function from date-fns lib to display Current date & time on your console
console.log(format(new Date(), "yyyy-MM-dd\tHH:mm:ss"));
//you can read more on https://devdocs.io/date_fns/

console.log(uuid());
