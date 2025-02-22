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
  min-height: 800px;
  padding: 8%;
  border-radius: 32px;
  gap: 56px;
`;

export const DivTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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

export const Button = styled.button`
  background-color:rgb(113, 51, 129); 
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  padding: 16px 32px;
  font-size: 24px;
  border-radius: 50px;
  width: 364px;
  cursor: pointer;
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