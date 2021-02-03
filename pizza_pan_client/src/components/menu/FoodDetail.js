import React from 'react';
import PlusMinus from './PlusMinus';
import '../../style/menu.css';

const FoodDetail = (
    {food, addToFoodCount, subtractFromFoodCount}
    ) => {

    if (!food){
        return "Loading..."
    }

    return (
        <li>
            <p>{food.title} {food.price}</p>
            <img src={food.image} className="menu-item-image"></img>
            <PlusMinus 
            addToFoodCount={addToFoodCount}
            subtractFromFoodCount={subtractFromFoodCount}
            food={food}
            />
        </li>
    )
}

export default FoodDetail
