import React from 'react';
import PlusMinus from './PlusMinus';
import '/Users/codeclanstudent/Desktop/codeclan_work/ordering_app/E44_Final_Project/E44_Final_Project/pizza_pan_client/src/style/menu.css';

const FoodDetail = ({food}) => {

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
