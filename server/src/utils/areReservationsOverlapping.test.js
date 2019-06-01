const { areReservationsOverlapping } = require('../utils/areReservationsOverlapping');

const newReservation1 = {
    create: {
        date: "2019-05-10T00:00:00.000Z",
        start: "2019-05-10T14:00:00.000Z",
        end: "2019-05-10T22:00:00.000Z"
    }
}
const newReservation2 = {
    create: {
        date: "2019-07-10T00:00:00.000Z",
        start: "2019-07-10T08:00:00.000Z",
        end: "2019-07-10T11:00:00.000Z"
    }
}
const newReservation3 = {
    create: {
        date: "2019-06-25T00:00:00.000+00:00",
        start: "2019-06-25T08:00:00.000+00:00",
        end: "2019-06-25T15:00:00.000+00:00"
    }
}
const newReservation4 = {
    create: {
        date: "2019-08-10T00:00:00.000+00:00",
        start: "2019-08-10T13:00:00.000+00:00",
        end: "2019-08-10T18:00:00.000+00:00"
    }
}
const newReservation5 = {
    create: {
        date: "2019-08-10T00:00:00.000+00:00",
        start: "2019-08-10T12:00:00.000+00:00",
        end: "2019-08-10T19:00:00.000+00:00"
    }
}
const newReservation6 = {
    create: {
        date: "2019-08-10T00:00:00.000+00:00",
        start: "2019-08-10T13:00:00.000+00:00",
        end: "2019-08-10T20:00:00.000+00:00"
    }
}
const newReservation7 = {
    create: {
        date: "2019-08-10T00:00:00.000+00:00",
        start: "2019-08-10T11:00:00.000+00:00",
        end: "2019-08-10T18:00:00.000+00:00"
    }
}
const newReservation8 = {
    create: {
        date: "2019-08-10T00:00:00.000+00:00",
        start: "2019-08-10T08:00:00.000+00:00",
        end: "2019-08-10T22:00:00.000+00:00"
    }
}

const reservations = [
    {
        date: "2019-05-25T00:00:00.000+00:00",
        start: "2019-05-25T08:00:00.000+00:00",
        end: "2019-05-25T20:00:00.000+00:00"
    },
    {
        date: "2019-06-25T00:00:00.000+00:00",
        start: "2019-06-25T08:00:00.000+00:00",
        end: "2019-06-25T14:00:00.000+00:00"  
    },
    {
        date: "2019-06-25T00:00:00.000+00:00",
        start: "2019-06-25T15:00:00.000+00:00",
        end: "2019-06-25T22:00:00.000+00:00"  
    },
    {
        date: "2019-05-10T00:00:00.000+00:00",
        start: "2019-05-10T14:00:00.000+00:00",
        end: "2019-05-10T22:00:00.000+00:00"  
    },
    {
        date: "2019-07-10T00:00:00.000+00:00",
        start: "2019-07-10T12:00:00.000+00:00",
        end: "2019-07-10T20:00:00.000+00:00" 
    },
    {
        date: "2019-08-10T00:00:00.000+00:00",
        start: "2019-08-10T08:00:00.000+00:00",
        end: "2019-08-10T12:00:00.000+00:00" 
    },
    {
        date: "2019-08-10T00:00:00.000+00:00",
        start: "2019-08-10T19:00:00.000+00:00",
        end: "2019-08-10T22:00:00.000+00:00" 
    }
]

test('Return true', () => {
    expect(areReservationsOverlapping()).toBe(true);
    expect(areReservationsOverlapping({}, {})).toBe(true);
});

test('Reservation 1', () => {
    expect(areReservationsOverlapping(newReservation1, reservations[0])).toBe(false);
    expect(areReservationsOverlapping(newReservation1, reservations[1])).toBe(false);
    expect(areReservationsOverlapping(newReservation1, reservations[2])).toBe(false);
    expect(areReservationsOverlapping(newReservation1, reservations[3])).toBe(true);
    expect(areReservationsOverlapping(newReservation1, reservations[4])).toBe(false);
});

test('Reservation 2', () => {
    expect(areReservationsOverlapping(newReservation2, reservations[0])).toBe(false);
    expect(areReservationsOverlapping(newReservation2, reservations[1])).toBe(false);
    expect(areReservationsOverlapping(newReservation2, reservations[2])).toBe(false);
    expect(areReservationsOverlapping(newReservation2, reservations[3])).toBe(false);
    expect(areReservationsOverlapping(newReservation2, reservations[4])).toBe(false);
});

test('Reservation 3', () => {
    expect(areReservationsOverlapping(newReservation3, reservations[0])).toBe(false);
    expect(areReservationsOverlapping(newReservation3, reservations[1])).toBe(true);
    expect(areReservationsOverlapping(newReservation3, reservations[2])).toBe(true);
    expect(areReservationsOverlapping(newReservation3, reservations[3])).toBe(false);
    expect(areReservationsOverlapping(newReservation3, reservations[4])).toBe(false);
});

test('Reservation 4', () => {
    expect(areReservationsOverlapping(newReservation4, reservations[5])).toBe(false);
    expect(areReservationsOverlapping(newReservation4, reservations[6])).toBe(false);
});

test('Reservation 5', () => {
    expect(areReservationsOverlapping(newReservation5, reservations[5])).toBe(true);
    expect(areReservationsOverlapping(newReservation5, reservations[6])).toBe(true);
});

test('Reservation 6', () => {
    expect(areReservationsOverlapping(newReservation6, reservations[5])).toBe(false);
    expect(areReservationsOverlapping(newReservation6, reservations[6])).toBe(true);
});

test('Reservation 7', () => {
    expect(areReservationsOverlapping(newReservation7, reservations[5])).toBe(true);
    expect(areReservationsOverlapping(newReservation7, reservations[6])).toBe(false);
});

test('Reservation 8', () => {
    expect(areReservationsOverlapping(newReservation8, reservations[5])).toBe(true);
    expect(areReservationsOverlapping(newReservation8, reservations[6])).toBe(true);
});