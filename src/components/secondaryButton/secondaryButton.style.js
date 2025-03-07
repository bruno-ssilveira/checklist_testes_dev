import styled from "styled-components";

export const Button = styled.button`
    background-color: ${({ theme }) => theme.COLORS.transparent};
    border: 2px solid ${({ theme }) => theme.COLORS.transparentPurple};
    color: ${({ theme }) => theme.COLORS.purple};
    text-align: center;
    text-decoration: none;
    padding: 16px 32px;
    font-size: 24px;
    border-radius: 50px;
    min-width: 240px;
    cursor: pointer;

    &:hover {
        border: 2px solid ${({ theme }) => theme.COLORS.purple};
        font-weight: 600;
        transition: background-color 0.5s ease;
    }

    @media (max-width: 800px) {
    max-width: 240px;
    min-width: 180px;
    }
`;