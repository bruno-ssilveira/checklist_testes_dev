import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DivTexts, Title, ChecklistContainer, ItemContainer, ItemText, Checkbox, Subtitle, Container, Button } from './styles';
import SVGpersonCheck from '../../assets/personCheck';

function Home() {
  return (
   <div>
      <Container>

        <DivTexts>
          <Title>Checklist de Testes</Title>
          <Subtitle>Certifique-se de que cada detalhe segue o padrão para uma experiência de usuário sem falhas!</Subtitle>
        </DivTexts>

        <SVGpersonCheck />
        <Link to="/checklist">
          <Button>Começar checklist!</Button>
        </Link>

      </Container>
   </div>
  );
}

export default Home;
