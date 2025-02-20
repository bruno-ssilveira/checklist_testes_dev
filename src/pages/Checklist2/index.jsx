import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Title, Navigation, Description, ItemDescription, ChecklistContainer, ItemContainer, ItemText, Checkbox, Subtitle } from './styles';
import { Container } from './styles';
import { DivTexts } from './styles';
import { Button } from './styles';
import { ButtonSecondary } from './styles';

function Checklist2() {
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
                <Title>Consistência Comportamental</Title>
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
                            As interações (pop-ups, animações) seguem o mesmo padrão?
                        </ItemText>
                        <ItemDescription>(ex.: O pop-up de confirmação sempre aparece no centro da tela.)</ItemDescription>
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
                            Os atalhos funcionam da mesma forma em todas as telas?
                        </ItemText>
                        <ItemDescription>(ex.: Ao segurar e arranjar um item, ele desliza para o lado de forma consistente.)</ItemDescription>
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
                            As mensagens de erro seguem um padrão claro?
                        </ItemText>
                        <ItemDescription>(ex.: As mensagens de erro estão sempre em vermelho e com o mesmo formato.)</ItemDescription>
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
                            Os feedbacks visuais (como mudança de cor ao passar o mouse) são consistentes?
                        </ItemText>
                        <ItemDescription>(ex.: O botão sempre muda de cor ao ser clicado.)</ItemDescription>
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
                            Ações de risco (como excluir itens) sempre pedem confirmação antes de prosseguir?
                        </ItemText>
                        <ItemDescription>(ex.: Ao tentar excluir um item, sempre aparece uma janela de confirmação.)</ItemDescription>
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
                            O estado de carregamento é consistente em todas as telas?
                        </ItemText>
                        <ItemDescription>(ex.: O ícone de carregamento sempre é o mesmo, como uma barra ou um círculo girando.)</ItemDescription>
                    </Description>
                </ItemContainer>
            </ChecklistContainer>

            <Navigation>
                <Link to="/checklist">
                    <ButtonSecondary>Voltar</ButtonSecondary>
                </Link>
                <Link to="/checklist3">
                    <Button disabled={!allChecked}>Avançar!</Button>
                </Link>
            </Navigation>
        </Container>
    );
}

export default Checklist2;
