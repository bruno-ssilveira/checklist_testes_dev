import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f4f4f4; 
  width: 50vh;
  height: 80vh;
  min-width: 500px;
  min-height: 700px;
  padding: 8%;
  border-radius: 32px;
  gap: 56px;

  @media (max-width: 400px) {
    width: 90%;
    max-width: 90%;
    min-height: 100%;
    padding: 16px;
    gap: 8px;
    border-radius: 16px;
  }

  @media (max-width: 1550px) {
    min-height: 650px;
  }
`;

export const DivTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 400px) {
    width: 70%;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-style: extra-bold;
  font-weight: 1000;
  color: #333333;
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color:rgb(93, 93, 93);
`;

export const SVGpersonCheck = styled.svg`
  width: 40%;  
  height: auto;
`;

export const ChecklistContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: auto;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const ItemText = styled.span`
  font-size: 16px;
  margin-left: 10px;
`;

export const ItemDescription = styled.input`
  width: 20px;
  height: 20px;
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;