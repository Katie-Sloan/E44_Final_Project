import React from 'react';
import PlusMinus from './PlusMinus';

const DrinkDetail = ({drink}) => {

    if (!drink){
        return "Loading..."
    }
    return (
        <li>
            <p>{drink.title} {drink.price}</p>
            <img src={drink.image} className="menu-item-image" alt={drink.title}></img>
            <PlusMinus />
        </li>
    )
}

export default DrinkDetail
