import React from 'react';
import '../../style/plusMinus.css';

const PlusMinus = (
    {addToFoodCount, subtractFromFoodCount}
) => {

    const handleAdd = (event) => {
        event.preventDefault();
        addToFoodCount(); 
    }

    const handleSubtract = (event) => {
        event.preventDefault();
        subtractFromFoodCount();
    }

    return (
        <div id="plus-minus-buttons">
            {/* <button onClick={handleAdd}>+</button>
            <button onClick={handleSubtract}>-</button> */}
        </div>
    )
}

export default PlusMinus
