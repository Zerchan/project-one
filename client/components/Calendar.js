import React, { useState } from 'react';
import cuid from 'cuid';
import moment from 'moment';
import { StyledCalendar, WeekDay, Day, CurrentDay, EmptyDay } from './styles/calendar';
import { filledArray, toMatrix } from '../lib/utils';

moment.locale('es', {
    months : 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_setiembre_octubre_noviembre_diciembre'.split('_'),
    monthsShort : 'ene._feb._mar._abr._may._jun._jul._ago._set._oct._nov._dic.'.split('_'),
    monthsParseExact : true,
    weekdays : 'domingo_lunes_martes_miércoles_jueves_viernes_sabado'.split('_'),
    weekdaysShort : 'dom._lun._mar._mir._jue._vie._sab.'.split('_'),
    weekdaysMin : 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    }
    // calendar : {
    //     sameDay : '[Aujourd’hui à] LT',
    //     nextDay : '[Demain à] LT',
    //     nextWeek : 'dddd [à] LT',
    //     lastDay : '[Hier à] LT',
    //     lastWeek : 'dddd [dernier à] LT',
    //     sameElse : 'L'
    // },
    // relativeTime : {
    //     future : 'dans %s',
    //     past : 'il y a %s',
    //     s : 'quelques secondes',
    //     m : 'une minute',
    //     mm : '%d minutes',
    //     h : 'une heure',
    //     hh : '%d heures',
    //     d : 'un jour',
    //     dd : '%d jours',
    //     M : 'un mois',
    //     MM : '%d mois',
    //     y : 'un an',
    //     yy : '%d ans'
    // },
    // dayOfMonthOrdinalParse : /\d{1,2}(er|e)/,
    // ordinal : function (number) {
    //     return number + (number === 1 ? 'er' : 'e');
    // },
    // meridiemParse : /PD|MD/,
    // isPM : function (input) {
    //     return input.charAt(0) === 'M';
    // },
    // // In case the meridiem units are not separated around 12, then implement
    // // this function (look at locale/id.js for an example).
    // // meridiemHour : function (hour, meridiem) {
    // //     return /* 0-23 hour, given meridiem token and hour 1-12 */ ;
    // // },
    // meridiem : function (hours, minutes, isLower) {
    //     return hours < 12 ? 'PD' : 'MD';
    // },
    // week : {
    //     dow : 1, // Monday is the first day of the week.
    //     doy : 4  // Used to determine first week of the year.
    // }
});

const renderWeekDays = () => {
    return moment.weekdays().map(day => {
        return (
          <WeekDay key={ day }>
           { day }
          </WeekDay>
        )
    })
}

const Calendar = () => {
    const [dateObject, setDateObject] = useState(moment());

    const currentDay = moment().format("D");
    const currentMonth = moment().format("M");
    const currentYear = moment().format("Y");

    const firstDayOfMonth = dateObject.startOf("month").format("d");
    const lastDayOfMonth = dateObject.endOf("month").format("d");
    const blanksBefore = filledArray(parseInt(firstDayOfMonth)).map(() => (<EmptyDay key={cuid()}>{""}</EmptyDay>));
    const blanksAfter = filledArray(6 - parseInt(lastDayOfMonth)).map(() => (<EmptyDay key={cuid()}>{""}</EmptyDay>));
    
    const daysInMonth = filledArray(parseInt(dateObject.daysInMonth())).map((_, i) => {
        const day = i+1;
        const renderCurrentDay = dateObject.format("Y") === currentYear && dateObject.format("M") === currentMonth && day === parseInt(currentDay);
        return renderCurrentDay ? <CurrentDay key={cuid()}>{day}</CurrentDay> : <Day key={cuid()}>{day}</Day>
    });

    const totalSlots = [...blanksBefore, ...daysInMonth, ...blanksAfter];
    const rows = toMatrix(totalSlots, 7);
    
    const renderDays = rows.map((day) => {
        return <tr key={cuid()}>{day}</tr>;
    });

    return (
        <StyledCalendar>
            <thead>
                <tr>
                    <WeekDay><span onClick={() => { setDateObject(moment(dateObject.subtract(1, 'month'))) }}>Prev</span></WeekDay>
                    <WeekDay colSpan={3}>{dateObject.format('MMMM')}</WeekDay>
                    <WeekDay colSpan={2}>{dateObject.format('YYYY')}</WeekDay>
                    <WeekDay><span onClick={() => { setDateObject(moment(dateObject.add(1, 'month'))) }}>Next</span></WeekDay>
                </tr>
                <tr>
                    { renderWeekDays() }
                </tr>
            </thead>
            <tbody>
                { renderDays }
            </tbody>
        </StyledCalendar>
    )
}

export default Calendar;