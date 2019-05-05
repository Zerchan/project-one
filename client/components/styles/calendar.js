import styled from 'styled-components';

export const StyledCalendar = styled.table`
    width: 100%;
    margin: auto;
	border-collapse: collapse;
	border: 1px solid #fff; /*for older IE*/
	border-style: hidden;
`;

export const WeekDay = styled.th`
    background: cadetblue;
    height: 50px;
    text-align: center;
    vertical-align: middle;
`;

export const Day = styled.td`
    background: antiquewhite;
    height: 100px;
    text-align: center;
    vertical-align: middle;
`;

export const CurrentDay = styled.td`
    background: antiquewhite;
    height: 100px;
    text-align: center;
    vertical-align: middle;
    color: red;
`;

export const EmptyDay = styled.td`
    background: antiquewhite;
    height: 100px;
    text-align: center;
    opacity: 0.7;
    vertical-align: middle;
`;
