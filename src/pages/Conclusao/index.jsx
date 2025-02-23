import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DivTexts, Title, ChecklistContainer, ItemContainer, ItemText, Checkbox, Subtitle, Container, Button } from './styles';
import Gif from '../../assets/gif';

function Conclusao() {
  return (
   <div>
      <Container>

        <DivTexts>
          <Title>Você concluiu o checklist!</Title>
          <Subtitle>Obrigado por ajudar a manter a consistência e qualidade das interfaces. Sua colaboração faz toda a diferença! </Subtitle>
        </DivTexts>

        <Gif />
        <Link to="/checklist/checklist1.jsx">
          <Button>Iniciar outro checklist!</Button>
        </Link>

      </Container>
   </div>
  );
}

export default Conclusao;
