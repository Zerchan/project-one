const { convertToTimeZone } = require('date-fns-timezone/dist/convertToTimeZone');
const timeZone = 'Etc/GMT'; // TODO: Load this from the condo info on the DB
const cttz = (date) => convertToTimeZone(date , { timeZone });

exports.cttz = cttz;