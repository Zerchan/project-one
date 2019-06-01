import styled from 'styled-components';

export const StyledNav = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

export const StyledNavItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    a, span {
        cursor: pointer;
        width: 100%;
        font-size: 3.0rem;
        text-align: center;
        background-color: ${({theme:{colors}}) => colors.linen};
        color: ${({theme:{colors}}) => colors.orange};
        border-bottom: 1px solid ${({theme:{colors}}) => colors.orange};
        :hover, :active {
            color: ${({theme:{colors}}) => colors.lace};
            background-color: ${({theme:{colors}}) => colors.orange};
        }
    }
`;