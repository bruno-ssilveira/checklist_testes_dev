import React from 'react';
import { DivTexts, Title, Subtitle, Container} from './styles';
import SVGpersonCheck from '../../assets/personCheck';
import PrimaryButton from "../../components/primaryButton/primaryButton";

function Home() {

  const resetChecklist = () => {
    // Limpa os itens do checklist armazenados no localStorage
    localStorage.clear()
  }

  return (
   <div>
      <Container>

        <DivTexts>
          <Title>Checklist de Testes</Title>
          <Subtitle>Certifique-se de que cada detalhe segue o padrão para uma experiência de usuário sem falhas!</Subtitle>
        </DivTexts>

        <SVGpersonCheck />

        <PrimaryButton caminho="../checklist/checklist1" click={resetChecklist} texto="Começar Checklist!"/>

      </Container>
   </div>
  );
}

export default Home;