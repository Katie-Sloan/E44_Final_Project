import React from 'react';
import '../../style/plusMinus.css';
import {FaPlus, FaMinus} from 'react-icons/fa';

const PlusMinusDrink = ({drink, addToDrinkCount, subtractFromDrinkCount}) => {

    const handleAdd = (event) => {
        event.preventDefault();
        addToDrinkCount(drink); 
    }

    const handleSubtract = (event) => {
        event.preventDefault();
        subtractFromDrinkCount(drink);
    }

    return (
        <div id="plus-minus-buttons">
            <button onClick={handleAdd}><FaPlus/></button>
            <button onClick={handleSubtract}><FaMinus/></button>
        </div>
    )
}

export default PlusMinusDrink