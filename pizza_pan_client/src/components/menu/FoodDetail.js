import React from 'react';
import PlusMinusFood from './PlusMinusFood';
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
            <img src={food.image} className="menu-item-image" alt={food.title}></img>
            <PlusMinusFood 
            addToFoodCount={addToFoodCount}
            subtractFromFoodCount={subtractFromFoodCount}
            food={food}
            />
        </li>
    )
}

export default FoodDetail
