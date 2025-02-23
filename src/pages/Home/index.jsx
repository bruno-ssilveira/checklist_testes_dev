import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DivTexts, Title, ChecklistContainer, ItemContainer, ItemText, Checkbox, Subtitle, Container} from './styles';
import SVGpersonCheck from '../../assets/personCheck';
import PrimaryButton from "../../components/primaryButton/primaryButton";

function Home() {
  return (
   <div>
      <Container>

        <DivTexts>
          <Title>Checklist de Testes</Title>
          <Subtitle>Certifique-se de que cada detalhe segue o padrão para uma experiência de usuário sem falhas!</Subtitle>
        </DivTexts>

        <SVGpersonCheck />

        <PrimaryButton caminho="../checklist/checklist1" texto="Começar Checklist!"/>

      </Container>
   </div>
  );
}

export default Home;
