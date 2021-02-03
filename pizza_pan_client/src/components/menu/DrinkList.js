import React from 'react';
import DrinkDetail from './DrinkDetail';

const DrinkList = (props) => {

    if (props.drinks.length === 0){
        return (<p>Loading drinks...</p>)
    }

    const drinks = props.drinks.map((drink, index) => {
        return (
            <ul key={index}>
                <DrinkDetail drink = {drink}/>  
            </ul>
        )
    })
    return (
        <>
        <h2>Drinks</h2>
        <ul className="component-list">
            {drinks}
        </ul>
        </>
    )
}

export default DrinkList
