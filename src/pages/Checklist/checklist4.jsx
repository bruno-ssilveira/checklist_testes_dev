import { useState } from 'react';
import { Title, Subtitle, Container, DivTexts, Navigation, ChecklistContainer } from './styles';
import PrimaryButton from "../../components/primaryButton/primaryButton";
import SecondaryButton from "../../components/secondaryButton/secondaryButton";
import CheckItem from '../../components/checkItem/checkItem';

function Checklist4() {

    const [items, setItems] = useState([
        { text: "A interface segue os padrões do Design System?", textDescription: "Ex: O ícone de lupa é usado consistentemente para busca em todas as telas.", isChecked: false },
        { text: "Os textos em modais, informativos, e outros elementos seguem o que foi especificado no Figma?", textDescription: "Ex: Modal de confirmação de exclusão de um item está exatamente conforme o Figma e com a mesma formatação.", isChecked: false },
        { text: "Em telas maiores, há um limite de largura para evitar que o conteúdo fique excessivamente esticado?", textDescription: "Ex: O conteúdo da página é centralizado e não ultrapassa 1200px de largura em telas grandes.", isChecked: false },
        { text: "A interface se adapta corretamente a telas menores?", textDescription: "Ex: Em dispositivos menores, o texto não fica muito pequeno, e os elementos não se sobrepõem.", isChecked: false },

    ]);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    // Função para verificar se todos os itens estão marcados
    const handleCheckChange = (index, checked) => {
        const updatedItems = [...items];
        updatedItems[index].isChecked = checked;
        setItems(updatedItems);

        // Verifica se todos os itens estão marcados
        const allChecked = updatedItems.every(item => item.isChecked);
        setIsButtonEnabled(allChecked);
    };

    return (
        <Container>
            <DivTexts>
                <Title>Padrões e Expectativas</Title>
                <Subtitle>Garanta que a interface siga os padrões de UX para uma experiência visual coesa e alinhada.</Subtitle>
            </DivTexts>

            <ChecklistContainer>
                {items.map((item, index) => (
                    <CheckItem 
                        key={index}
                        index={index}
                        text={item.text} 
                        textDescription={item.textDescription} 
                        onCheckChange={handleCheckChange}
                    />
                ))}
            </ChecklistContainer>


            <Navigation>
                <SecondaryButton caminho="/checklist/checklist3" texto="Voltar" />
                <PrimaryButton caminho="/conclusao" texto="Avançar!" disabled={!isButtonEnabled} />
            </Navigation>
        </Container>
    );
}

export default Checklist4;
