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
        background-color: ${({ theme }) => theme.linen};
        color: ${({ theme }) => theme.orange};
        border-bottom: 1px solid ${({ theme }) => theme.orange};
        :hover, :active {
            color: ${({ theme }) => theme.lace};
            background-color: ${({ theme }) => theme.orange};
        }
    }
`;