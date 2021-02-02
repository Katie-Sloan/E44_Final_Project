import React from 'react';
import FoodDetail from './FoodDetail';


const FoodList = (props) => {

    if (props.foods.length === 0){
        return (<p>Loading food...</p>)
    }

    const foods = props.foods.map((food, index) => {
        return (
            <ul key={index}>
                <FoodDetail food = {food}/>
            </ul>
        )
    })

    return (
        <>
        <h2>Food</h2>
        <ul className="component-list">
            {foods}
        </ul>
        </>
    )
}

export default FoodList
