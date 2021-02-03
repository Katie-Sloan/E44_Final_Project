import React from 'react'
import FoodDetail from '.././menu/FoodDetail'
import DrinkDetail from '../menu/DrinkDetail'

const Checkout = ({orderItems, checkoutKey, setCheckoutKey, addToFoodCount, subtractFromFoodCount}) => {
    
    let foodStuff = [];
    let drinkStuff = [];

    const orderItemsPrint = function(orderItemsToPass) {
        for (const order of orderItemsToPass) {
            if (order.cookingTime > 0) {
            console.log("wooo")
            foodStuff.push(order)
            }
            else console.log("I'm a drink!")
            drinkStuff.push(order)
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

    return (
        <>
        <h2>Food</h2>
        
        <ul className="component-list">
            {foodsToBeRenderedData}
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
