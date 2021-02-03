import React from 'react'
import FoodDetail from '.././menu/FoodDetail'
import DrinkDetail from '../menu/DrinkDetail'

const Checkout = ({orderItems, checkoutKey, setCheckoutKey}) => {
    
    // const renderItems = function(items) {
    //     for (item of items) {
    //         if (item.cookingTime == true) {
    //             <FoodDetail/>
    //         }
    //         else return <DrinkDetail />
    //     }
    // }
    
    
    // const itemsToShow = orderItems.map((item) => {

    //     return (
    //         <div key = {props.key}>
    //             {item.title}
    //         </div>
    //     )
    // })
    const orderItemsPrint = function(orderItemsToPass) {
        for (const order of orderItemsToPass) {
            if (order.cookingTime > 0) {
            console.log("wooo")
            }
            else console.log("I'm a drink!")
        }
    }
    
    return (
        <div>
            <p> Load order details here </p>
            <button onClick={orderItemsPrint(orderItems)}>Click me</button>
            

            
        </div>
    )
}

export default Checkout
