import { ItemContainer, Description, ItemText, ItemDescription, Checkbox } from "./checkItem.style";

function CheckItem({ index, text, textDescription, isChecked, onCheckChange }) {
    const handleCheckboxChange = () => {
        const newCheckedState = !isChecked;
        onCheckChange(index, newCheckedState);  // Passa a mudança para o componente pai
    };

    return (
        <ItemContainer>
            <Checkbox>
                <input
                    id={`checkbox-${index}`} // Atribuindo id único para cada checkbox
                    type="checkbox" 
                    onChange={handleCheckboxChange} 
                    checked={isChecked} // Recebe o estado do checkbox do componente pai
                />
                <span></span>
            </Checkbox>
            <Description onClick={handleCheckboxChange}>
                <ItemText isChecked={isChecked}>
                    {text}
                </ItemText>
                <ItemDescription>({textDescription})</ItemDescription>
            </Description>
        </ItemContainer>
    );
}

export default CheckItem;
