import { useState } from 'react';
import { Title, Subtitle, Container, DivTexts, Navigation, ChecklistContainer } from './styles';
import PrimaryButton from "../../components/primaryButton/primaryButton";
import SecondaryButton from "../../components/secondaryButton/secondaryButton";
import CheckItem from '../../components/checkItem/checkItem';

function Checklist1() {
    const [items, setItems] = useState([
        { text: "As cores seguem o padrão previsto no Figma?", textDescription: "Ex: Botões e tags sempre com o mesmo código hexadecimal do Figma.", isChecked: false },
        { text: "A tipografia possui padrão de fontes e tamanhos esperados?", textDescription: "Ex: O título está sempre com Roboto Bold 24px.", isChecked: false },
        { text: "Os ícones são intuitivos e mantêm o mesmo estilo e funcionalidade?", textDescription: "Ex: O ícone de \"Exportar\" é sempre o mesmo, como no Figma.", isChecked: false },
        { text: "O espaçamento entre os elementos é consistente e adequado?", textDescription: "Ex: Sempre 16px entre os botões e 32px entre os títulos e o conteúdo.", isChecked: false },
        { text: "Todos os elementos estão alinhados corretamente, sem desvio de padrões?", textDescription: "Ex: Os botões estão sempre alinhados à direita.", isChecked: false },
        { text: "Os componentes estão com os tamanhos proporcionais e consistentes?", textDescription: "Ex: Todos os botões têm 44px de altura.", isChecked: false }
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
                <Title>Consistência Visual</Title>
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
                <SecondaryButton caminho="/" texto="Voltar" />
                <PrimaryButton caminho="/checklist/checklist2" texto="Avançar!" disabled={!isButtonEnabled} />
            </Navigation>
        </Container>
    );
}

export default Checklist1;