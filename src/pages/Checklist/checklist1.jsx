import { React, useState } from 'react';
import { Title, Navigation, Description, ItemDescription, ChecklistContainer, ItemContainer, ItemText, Checkbox, Subtitle, Container, DivTexts, ButtonSecondary} from './styles';
import PrimaryButton from "../../components/primaryButton/primaryButton";

function Checklist1() {
    const [checkedItems, setCheckedItems] = useState({});

    // Total de checkboxes
    const totalCheckboxes = 6;

    // Função para verificar se todos os checkboxes estão marcados
    const allChecked = Object.keys(checkedItems).length === totalCheckboxes && 
                        Object.values(checkedItems).every(value => value);

    const handleCheckboxChange = (index) => {
        setCheckedItems((prev) => ({
            ...prev,
            [index]: !prev[index]  
        }));
    };

    

    return (
        <Container>
            <DivTexts>
                <Title>Consistência Visual</Title>
                <Subtitle>Garanta que a interface siga os padrões de UX para uma experiência visual coesa e alinhada.</Subtitle>
            </DivTexts>

            <ChecklistContainer>
                <ItemContainer>
                    <Checkbox>
                        <input 
                            type="checkbox" 
                            onChange={() => handleCheckboxChange(0)} 
                            checked={checkedItems[0] || false} 
                        />
                        <span></span>
                    </Checkbox>
                    <Description>
                        <ItemText isChecked={checkedItems[0] || false}>
                            As cores seguem o padrão previsto no Figma?
                        </ItemText>
                        <ItemDescription>(ex.: Botões de salvar sempre com a cor verde e botões de download com outlined e ícone.)</ItemDescription>
                    </Description>
                </ItemContainer>

                <ItemContainer>
                    <Checkbox>
                        <input 
                            type="checkbox" 
                            onChange={() => handleCheckboxChange(1)} 
                            checked={checkedItems[1] || false} 
                        />
                        <span></span>
                    </Checkbox>
                    <Description>
                        <ItemText isChecked={checkedItems[1] || false}>
                            A tipografia possui padrão de fontes e tamanhos esperados?
                        </ItemText>
                        <ItemDescription>(ex.: O título está sempre com Roboto Bold 24px.)</ItemDescription>
                    </Description>
                </ItemContainer>

                <ItemContainer>
                    <Checkbox>
                        <input 
                            type="checkbox" 
                            onChange={() => handleCheckboxChange(2)} 
                            checked={checkedItems[2] || false} 
                        />
                        <span></span>
                    </Checkbox>
                    <Description>
                        <ItemText isChecked={checkedItems[2] || false}>
                            Os ícones são intuitivos e mantêm o mesmo estilo e funcionalidade?
                        </ItemText>
                        <ItemDescription>(ex.: O ícone de "Download" é sempre o mesmo, como no Figma.)</ItemDescription>
                    </Description>
                </ItemContainer>
                <ItemContainer>
                    <Checkbox>
                        <input 
                            type="checkbox" 
                            onChange={() => handleCheckboxChange(3)} 
                            checked={checkedItems[3] || false} 
                        />
                        <span></span>
                    </Checkbox>
                    <Description>
                        <ItemText isChecked={checkedItems[3] || false}>
                            O espaçamento entre os elementos é consistente e adequado?
                        </ItemText>
                        <ItemDescription>(ex.: O espaçamento entre os botões é sempre de 16px.)</ItemDescription>
                    </Description>
                </ItemContainer>
                <ItemContainer>
                    <Checkbox>
                        <input 
                            type="checkbox" 
                            onChange={() => handleCheckboxChange(4)} 
                            checked={checkedItems[4] || false} 
                        />
                        <span></span>
                    </Checkbox>
                    <Description>
                        <ItemText isChecked={checkedItems[4] || false}>
                            Todos os elementos estão alinhados corretamente, sem desvio de padrões?
                        </ItemText>
                        <ItemDescription>(ex.: Os botões estão sempre alinhados à direita.)</ItemDescription>
                    </Description>
                </ItemContainer>
                <ItemContainer>
                    <Checkbox>
                        <input 
                            type="checkbox" 
                            onChange={() => handleCheckboxChange(5)} 
                            checked={checkedItems[5] || false} 
                        />
                        <span></span>
                    </Checkbox>
                    <Description>
                        <ItemText isChecked={checkedItems[5] || false}>
                            Os componentes estão com os tamanhos proporcionais e consistentes em todas as telas?
                        </ItemText>
                        <ItemDescription>(ex.: Todos os botões têm 48px de altura.)</ItemDescription>
                    </Description>
                </ItemContainer>
            </ChecklistContainer>

            <Navigation>
                <ButtonSecondary>Voltar</ButtonSecondary>
                <PrimaryButton caminho="/checklist/checklist2" texto="Avançar!" disable={!allChecked}/>
            </Navigation>
        </Container>
    );
}

export default Checklist1;
