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
        text-align: center;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        border: 1px solid ${({ theme }) => theme.black};
        border-bottom: 10px solid ${({ theme }) => theme.black};
        :hover {
            color: ${({ theme }) => theme.orange};
            border: 1px solid ${({ theme }) => theme.orange};
            border-bottom: 10px solid ${({ theme }) => theme.orange};
        }
    }
`;