import styled from "styled-components";

export const StepperStyle = styled.div`
    width: 100%;
`

export const StepStyle = styled.div`
    &:hover {
        background-color: ${({ theme }) => theme.COLORS.lightPurple};
        transition: background-color 0.5s ease;
    }
`


/*
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f4f4f4; 
  width: 80vh;
  min-width: 400px;
  min-height: 800px;
  max-width: 900px;
  max-height: 90vh;
  padding: 32px;
  border-radius: 32px;
  gap: 32px;

  @media (min-width: 200px) {
    padding: 24px;
    width: 100%;
  }

    @media (max-width: 992px) {
        max-height: 90vh;
        min-height: 700px;
        max-width: 90vh;
        min-width: 400px;
        gap: 16px;
    }

`;
*/