import React from 'react'
import PlusMinus from './PlusMinus'

const FoodDetail = ({food}) => {

    if (!food){
        return "Loading..."
    }
    return (
        <li>
            <p>{food.title} {food.price}</p>
            <PlusMinus />
        </li>
    )
}

export default FoodDetail
