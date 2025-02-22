import styled from "styled-components";

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

export const DivTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

    @media (min-width: 200px) {
    gap: 4px;
    width: 100%;
    }
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-style: extra-bold;
  font-weight: 1000;
  color: #333333;


`;

export const Subtitle = styled.h2`
  font-size: 22px;
  font-weight: 500;
  color:rgb(93, 93, 93);

    @media (max-width: 800px) {
    font-size: 20px;
    }
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
  min-width: 240px;
cursor: pointer;

 &:disabled {
    background-color: rgba(163, 163, 163, 0.41);
  }
    
    @media (max-width: 800px) {
    max-width: 240px;
    min-width: 180px;
    }
`;

export const ButtonSecondary = styled.button`
    border: 1px solid #333333;
    color: #333333;
    text-align: center;
    text-decoration: none;
    padding: 16px 32px;
    font-size: 24px;
    border-radius: 50px;
    min-width: 240px;
    cursor: pointer;

        @media (max-width: 800px) {
    max-width: 240px;
    min-width: 180px;
    }
`;

export const ChecklistContainer = styled.div`
  width: 100%;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: left;
  background-color:rgb(240, 231, 241);
  padding: 16px 24px;
  border-radius: 10px;
  margin-bottom: 8px;
  gap: 16px;

    @media (max-width: 576px) {
      padding: 12px 16px;
}
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

      @media (max-width: 576px) {
      gap: 2px;
}
`;

export const ItemText = styled.span`
  font-size: 20px;
  color: #333333;
  text-decoration: ${(props) => (props.isChecked ? 'line-through' : 'none')};
`;

export const ItemDescription = styled.span`
  font-size: 18px;
  color:rgb(93, 93, 93);

    @media (max-width: 576px) {
      font-size: 14px;
}
`;

export const Navigation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export const Checkbox = styled.label`
display: flex;
align-items: center;
cursor: pointer;
  
input {
    display: none; /* Esconde o checkbox padrão */
}

span {
    width: 28px;
    height: 28px;
    border: 1px solid #000;
    display: inline-block;
    border-radius: 4px;
    position: relative;
}

  input:checked + span {
    background-color:rgb(113, 51, 129); 
    border: none;
  }

  input:checked + span::after {
    content: "✔";
    font-size: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
  }
`;