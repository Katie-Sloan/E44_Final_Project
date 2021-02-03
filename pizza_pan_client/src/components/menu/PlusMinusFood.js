import React from 'react';
import '../../style/plusMinus.css';

const PlusMinusFood = ({food, addToFoodCount, subtractFromFoodCount}) => {

    const handleAdd = (event) => {
        event.preventDefault();
        addToFoodCount(food); 
    }

    const handleSubtract = (event) => {
        event.preventDefault();
        subtractFromFoodCount(food);
    }

    return (
        <div id="plus-minus-buttons">
            <button onClick={handleAdd}>+</button>
            <button onClick={handleSubtract}>-</button>
        </div>
    )
}

export default PlusMinusFood
