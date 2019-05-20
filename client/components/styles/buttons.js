import styled from 'styled-components';

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 30px;
    background-color: ${({theme, error}) => danger ? theme.red : theme.green};
    color: white;
`
