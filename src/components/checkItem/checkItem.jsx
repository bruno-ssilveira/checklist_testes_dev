import { useState } from "react";
import { ItemContainer, Description, ItemText, ItemDescription, Checkbox } from "./checkItem.style";

function CheckItem({ index, text, textDescription, onCheckChange }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        const newCheckedState = !isChecked;
        setIsChecked(newCheckedState);
        onCheckChange(index, newCheckedState);  // Passa a mudança para o componente pai
    };

    return (
        <ItemContainer>
            <Checkbox>
                <input 
                    type="checkbox" 
                    onChange={handleCheckboxChange} 
                    checked={isChecked} 
                />
                <span></span>
            </Checkbox>
            <Description>
                <ItemText isChecked={isChecked}>
                    {text}
                </ItemText>
                <ItemDescription>({textDescription})</ItemDescription>
            </Description>
        </ItemContainer>
    );
}

export default CheckItem;
