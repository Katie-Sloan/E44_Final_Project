import React from 'react';
import '../../style/plusMinus.css';

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
            <button onClick={handleAdd}>+</button>
            <button onClick={handleSubtract}>-</button>
        </div>
    )
}

export default PlusMinusDrink