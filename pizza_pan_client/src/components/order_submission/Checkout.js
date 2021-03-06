import React from 'react'
import { Link } from 'react-router-dom'
import FoodDetail from '.././menu/FoodDetail'
import DrinkDetail from '../menu/DrinkDetail'
import '../../style/checkout.css'
import Singleton from '../../data/UserSingleton'


const Checkout = ({orderItems, checkoutKey, setCheckoutKey, addToFoodCount, subtractFromFoodCount, addToDrinkCount, subtractFromDrinkCount, changeTester}) => {
    let userSingleton = Singleton.getInstance();
    let foodStuff = [];
    let drinkStuff = [];
    
    const sortItems = () => {
        
    }
    
    const orderItemsPrint = function(orderItemsToPass) {
        console.log(userSingleton)
        for (const order of orderItemsToPass) {
            if (order.cookingTime > 0) {
            console.log("wooo")
            foodStuff.push(order)
            checkoutKey += 1;
            }
            else {console.log("I'm a drink!")
            drinkStuff.push(order)
            checkoutKey += 1;}
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

    const getPricesList = orderItems.map((item, index) => {
        return item.price
    })

    const getTotal = function () {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return getPricesList.reduce(reducer);
    }

    return orderItems.length? 
        <>
        <h2>Please Review Your Order</h2>
        
        <ul className="checkout-component-list">
            {foodsToBeRenderedData}
            {drinksToBeRenderedData}           
        </ul>
        <h2 id="total-price">Total price: {getTotal()}</h2>
        <br></br>

        <Link
            to='/payment'>
                Go to Payment
            </Link>
        </>
    :
    <h1>Please add items to basket before checkout</h1>
}
export default Checkout