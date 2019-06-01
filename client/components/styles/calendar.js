import styled from 'styled-components';

const CalendarCell = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledCalendar = styled.div`
    width: 100%;
`;

export const CalendarGrid = styled(StyledCalendar)`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`;

export const NavBtn = styled(CalendarCell)`
    cursor: pointer;
    background: ${({theme:{colors}}) => colors.green};
    height: 50px;
    span {
        display: block;
        width: 100%;
        text-align: center;
    }
    :hover {
        background: ${({theme:{colors}}) => colors.smalt};
    }
`;
export const PrevBtn = styled(NavBtn)`
    border-top-left-radius: 30px;
`;
export const NextBtn = styled(NavBtn)`
    border-top-right-radius: 30px;
`;

export const WeekDay = styled(CalendarCell)`
    background: ${({theme:{colors}}) => colors.green};
    height: 50px;
    text-transform: capitalize;
`;

export const Month = styled(WeekDay)`
    grid-column-start: span 3;
    text-transform: capitalize;
`;

export const Year = styled(WeekDay)`
    grid-column-start: span 2;
`;

export const Day = styled(CalendarCell)`
    background: ${({theme:{colors}}) => colors.linen};
    height: 100px;
`;

export const CurrentDay = styled(Day)`
    color: ${({theme:{colors}}) => colors.smalt};
    border: 1px dashed ${({theme:{colors}}) => colors.smalt};
`;

export const EmptyDay = styled(Day)`
    background: ${({theme:{colors}}) => colors.lace};
`;
