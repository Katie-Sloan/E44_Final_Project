import React from 'react';
import FoodDetail from './FoodDetail';


const FoodList = ( {foods, addToFoodCount, subtractFromFoodCount} ) => {

    if (foods.length === 0){
        return (<p>Loading food...</p>)
    }

    const foodsData = foods.map((food, index) => {

        return (
            <ul key={index}>
                <FoodDetail 
                position={index+1}
                food = {food}
                addToFoodCount = {addToFoodCount}
                subtractFromFoodCount = {subtractFromFoodCount}
                />
            </ul>
        )
    });

    return (
        <>
        <h2 id="menu-heading">Menu</h2>
        <ul className="component-list" id="food-list">
            {foodsData}
        </ul>
        </>
    )
}

export default FoodList
