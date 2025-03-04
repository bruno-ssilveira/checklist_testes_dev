import React from 'react'
import { DivTexts, Title, Subtitle, Container } from './styles'
import Gif from '../../assets/gif'
import PrimaryButton from "../../components/primaryButton/primaryButton"
import { useNavigate } from 'react-router-dom'

function Conclusao() {
  const navigate = useNavigate()

  const resetChecklist = () => {
    // Limpa os itens do checklist armazenados no localStorage
    localStorage.clear()
  }

  return (
      <Container>

        <DivTexts>
          <Title>Você concluiu o checklist!</Title>
          <Subtitle>Obrigado por ajudar a manter a consistência e qualidade das interfaces. Sua colaboração faz toda a diferença! </Subtitle>
        </DivTexts>

        <Gif />

        <PrimaryButton texto="Iniciar outro checklist!" click={resetChecklist} caminho="/checklist/checklist1"/>

      </Container>
  )
}

export default Conclusao