import React from 'react';
import DrinkDetail from './DrinkDetail';

const DrinkList = ( {drinks, addToDrinkCount, subtractFromDrinkCount}) => {

    // if (drinks.length === 0){
    //     return (<p>Loading drinks...</p>)
    // }

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
        {/* <h2>Drinks</h2> */}
        <ul className="component-list">
            {drinksData}
        </ul>
        </>
    )
}

export default DrinkList
