import React from 'react';
import PlusMinus from './PlusMinus';

const DrinkDetail = ({drink}) => {

    if (!drink){
        return "Loading..."
    }
    return (
        <li>
            <p>{drink.title} {drink.price}</p>
            <PlusMinus />
        </li>
    )
}

export default DrinkDetail
