import React from 'react'
import FoodDetail from '.././menu/FoodDetail'
import DrinkDetail from '../menu/DrinkDetail'

const Checkout = ({orderItems, checkoutKey, setCheckoutKey, addToFoodCount, subtractFromFoodCount, addToDrinkCount, subtractFromDrinkCount, changeTester}) => {
    
    let foodStuff = [];
    let drinkStuff = [];

    // if (foodStuff.length === 0 && drinkStuff.length == 0){
    //     return (<p>Loading food and drinks...</p>)
    // }

    const orderItemsPrint = function(orderItemsToPass) {
        for (const order of orderItemsToPass) {
            if (order.cookingTime > 0) {
            console.log("wooo")
            foodStuff.push(order)
            checkoutKey += 1;
            // changeTester();
            }
            else console.log("I'm a drink!")
            drinkStuff.push(order)
            checkoutKey += 1;
            // changeTester();
        }
    }

    orderItemsPrint(orderItems)

    const foodsToBeRenderedData = foodStuff.map((food, index) => {

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

    const drinksToBeRenderedData = drinkStuff.map((drink, index) => {

        return (
            <ul key={index}>
                <DrinkDetail 
                position={index+1}
                drink = {drink}
                addToDrinkCount = {addToDrinkCount}
                subtractFromDrinkCount = {subtractFromDrinkCount}
                />
            </ul>
        )
    });


    return (
        <>
        <h2>Please Review Your Order</h2>
        
        <ul className="component-list">
            {foodsToBeRenderedData}
            {drinksToBeRenderedData}
        </ul>
        </>
    )

    
//     return (
//         <div>
//             <p> Load order details here </p>
//             <p>{orderItemsPrint(orderItems)}</p>

            

            
//         </div>
//     )
// }
    }
export default Checkout
