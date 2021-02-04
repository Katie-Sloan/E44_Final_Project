import React from 'react';
import PlusMinusDrink from './PlusMinusDrink';

const DrinkDetail = ({drink, addToDrinkCount, subtractFromDrinkCount}) => {

    if (!drink){
        return "Loading..."
    }
    return (
        <li>
            <p>{drink.title} £{drink.price}</p>
            <img src={drink.image} className="menu-item-image" alt={drink.title}></img>
            <PlusMinusDrink
            addToDrinkCount={addToDrinkCount}
            subtractFromDrinkCount={subtractFromDrinkCount}
            drink={drink}
            />
        </li>
    )
}

export default DrinkDetail
