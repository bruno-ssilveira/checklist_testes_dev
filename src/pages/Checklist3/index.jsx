import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Title, Navigation, Description, ItemDescription, ChecklistContainer, ItemContainer, ItemText, Checkbox, Subtitle } from './styles';
import { Container } from './styles';
import { DivTexts } from './styles';
import { Button } from './styles';
import { ButtonSecondary } from './styles';

function Checklist3() {
    const [checkedItems, setCheckedItems] = useState({});

    // Total de checkboxes
    const totalCheckboxes = 5;

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
                <Title>Fluxo e Navegação</Title>
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
                            O fluxo de navegação é lógico e intuitivo?
                        </ItemText>
                        <ItemDescription>(ex.: O botão "Voltar" leva sempre para a tela anterior, sem desvios inesperados.)</ItemDescription>
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
                            As funcionalidades importantes estão sempre acessíveis em todas as telas?
                        </ItemText>
                        <ItemDescription>(ex.: O botão "Novo Item" está sempre visível.)</ItemDescription>
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
                            O usuário consegue realizar ações com o mínimo de cliques possível?
                        </ItemText>
                        <ItemDescription>(ex.: O usuário consegue adicionar um item ao carrinho com um clique.)</ItemDescription>
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
                            A navegação entre as telas é consistente?
                        </ItemText>
                        <ItemDescription>(ex.: O menu lateral está presente em todas as telas, oferecendo as mesmas opções.)</ItemDescription>
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
                            O sistema usa breadcrumbs para indicar o caminho de navegação?
                        </ItemText>
                        <ItemDescription>(ex.: Na página de "Detalhes do Produto", os breadcrumbs mostram "Home > Categoria > Produto".)</ItemDescription>
                    </Description>
                </ItemContainer>
            </ChecklistContainer>

            <Navigation>
                <Link to="/checklist2">
                    <ButtonSecondary>Voltar</ButtonSecondary>
                </Link>
                <Link to="/checklist4">
                    <Button disabled={!allChecked}>Avançar!</Button>
                </Link>
            </Navigation>
        </Container>
    );
}

export default Checklist3;
