const format = require('date-fns/format');
const isEqual = require('date-fns/is_equal');
const getHours = require('date-fns/get_hours');
const { cttz } = require('./cttz');

const dateFormat = 'MM/DD/YYYY';

function areReservationsOverlapping(newRes = {}, exiRes = {}){
    if(newRes && exiRes && newRes.create && exiRes.date){
        //Get new reservation Date and Hours
        const newResStartDate = format(cttz(newRes.create.date), dateFormat);
        const newResStartHour = getHours(cttz(newRes.create.start));
        const newResEndHour = getHours(cttz(newRes.create.end));

        //Get existing reservation Date and Hours
        const exiResStartDate = format(cttz(exiRes.date), dateFormat);
        const exiResStartHour = getHours(cttz(exiRes.start));
        const exiResEndHour = getHours(cttz(exiRes.end));

        // --Check if the new reservation DATE overlaps with an already existing reservation
        if(isEqual(newResStartDate, exiResStartDate)){
            // TODO: Add a waiting time between reservations - 1/2 hour or 1 hour
            // --Check if the new reservation HOURS don't overlap with an already existing reservation
            return (newResStartHour <= exiResEndHour) && (exiResStartHour <= newResEndHour);
        }

        return false;
    }

    return true;
}

exports.areReservationsOverlapping = areReservationsOverlapping;