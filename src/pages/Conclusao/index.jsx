import React, { useState } from 'react';
import { DivTexts, Title, ChecklistContainer, ItemContainer, ItemText, Checkbox, Subtitle, Container, Button } from './styles';
import Gif from '../../assets/gif';
import PrimaryButton from "../../components/primaryButton/primaryButton";

function Conclusao() {
  return (
   <div>
      <Container>

        <DivTexts>
          <Title>Você concluiu o checklist!</Title>
          <Subtitle>Obrigado por ajudar a manter a consistência e qualidade das interfaces. Sua colaboração faz toda a diferença! </Subtitle>
        </DivTexts>

        <Gif />
        
        <PrimaryButton caminho="/checklist/checklist1" texto="Iniciar outro checklist!" />

      </Container>
   </div>
  );
}

export default Conclusao;
