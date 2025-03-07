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
  gap: 10px;

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
  width: 100%;

  @media (max-width: 400px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-style: extra-bold;
  font-weight: 1000;
  color: #333333;

  @media (max-width: 400px) {
    font-size: 30px;
    text-align: center;
  }
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color:rgb(93, 93, 93);

  @media (max-width: 400px) {
    font-size: 20px;
    width: 90%;
    margin-left: 30px;
  }
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