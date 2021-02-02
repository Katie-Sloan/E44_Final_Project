import React from 'react';
import PlusMinus from './PlusMinus';
import '../../style/menu.css';

const FoodDetail = ({food}) => {

    if (!food){
        return "Loading..."
    }
    return (
        <li>
            <p>{food.title} {food.price}</p>
            <img src={food.image} className="menu-item-image" alt={food.title}></img>
            <PlusMinus />
        </li>
    )
}

export default FoodDetail
