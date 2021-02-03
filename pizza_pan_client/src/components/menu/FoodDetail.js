import React from 'react';
import PlusMinus from './PlusMinus';
import '../../style/menu.css';

const FoodDetail = ({food, position}) => {
    <p>{food.title}</p>

    if (!food){
        return "Loading..."
    }
    return (
        <li>
            <p>{food.title} {food.price}</p>
            <img src={food.image} className="menu-item-image"></img>
            <PlusMinus />
        </li>
    )
}

export default FoodDetail
