import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Title, Navigation, Description, ItemDescription, ChecklistContainer, ItemContainer, ItemText, Checkbox, Subtitle, Container,  DivTexts, Button, ButtonSecondary} from './styles';

function Checklist4() {
    const [checkedItems, setCheckedItems] = useState({});

    // Total de checkboxes
    const totalCheckboxes = 4;

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
                <Title>Alinhamento com Padrões e Expectativas</Title>
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
                            A interface segue os padrões do Design System?
                        </ItemText>
                        <ItemDescription>(ex.: O ícone de lupa é usado consistentemente para busca em todas as telas.)</ItemDescription>
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
                            Os textos em modais, informativos, e outros elementos seguem o que foi especificado no Figma?
                        </ItemText>
                        <ItemDescription>(ex.: O botão "Confirmar" está escrito exatamente como no Figma e com a mesma formatação.)</ItemDescription>
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
                            Em telas maiores, há um limite de largura para evitar que o conteúdo fique excessivamente esticado?
                        </ItemText>
                        <ItemDescription>(ex.: O conteúdo da página é centralizado e não ultrapassa 1200px de largura em telas grandes.)</ItemDescription>
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
                            A interface se adapta corretamente a telas menores?
                        </ItemText>
                        <ItemDescription>(ex.: Em dispositivos móveis, o texto não fica muito pequeno, e os elementos não se sobrepõem.)</ItemDescription>
                    </Description>
                </ItemContainer>
            </ChecklistContainer>

            <Navigation>
                <Link to="/checklist/checklist3.jsx">
                    <ButtonSecondary>Voltar</ButtonSecondary>
                </Link>
                <Link to="/conclusao">
                    <Button disabled={!allChecked}>Avançar!</Button>
                </Link>
            </Navigation>
        </Container>
    );
}

export default Checklist4;
