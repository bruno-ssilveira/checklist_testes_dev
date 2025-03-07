import styled from "styled-components";

export const Button = styled.button`
    background-color: ${({ theme }) => theme.COLORS.purple};
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    padding: 16px 32px;
    font-size: 24px;
    border-radius: 50px;
    min-width: 240px;
    cursor: pointer;

    &:disabled {
        background-color: rgba(163, 163, 163, 0.41);
        cursor: default;
    }

    &:not(:disabled):hover {
        background-color: ${({ theme }) => theme.COLORS.lightPurple};
        transition: background-color 0.5s ease;
    }

    @media (max-width: 800px) {
    max-width: 240px;
    min-width: 180px;
    }
`;