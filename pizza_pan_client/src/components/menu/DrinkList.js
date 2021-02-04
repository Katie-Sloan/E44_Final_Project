import React from 'react';
import DrinkDetail from './DrinkDetail';

const DrinkList = ( {drinks, addToDrinkCount, subtractFromDrinkCount}) => {

    const drinksData = drinks.map((drink, index) => {
        return (
            <ul key={index}>
                <DrinkDetail 
                drink = {drink}
                addToDrinkCount = {addToDrinkCount}
                subtractFromDrinkCount = {subtractFromDrinkCount}
                />  
            </ul>
        )
    })
    return (
        <>
        <ul className="component-list">
            {drinksData}
        </ul>
        </>
    )
}

export default DrinkList
