import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import DrinkList from '../components/menu/DrinkList';
import FoodList from '../components/menu/FoodList';
import SitInOrTakeOutOption from '../components/menu/SitInOrTakeOutOption';
import ViewBasket from '../components/menu/ViewBasket';
import Request from '../helpers/request';
import Filter from '../components/menu/Filter';
import { Link } from "react-router-dom";


const MenuContainer = ({orderItems, key, setOrderItems, test, setTest, addToFoodCount, subtractFromFoodCount, addToDrinkCount, subtractFromDrinkCount, handleRouteInContentContainer}) => {
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const[checkoutKey, setCheckoutKey] = useState(1);
  const[tester, setTester] = useState(true);
  const[filteredFoodsAndDrinks, setFilteredFoodsAndDrinks] = useState([]);
  const[filteredDrinks, setFilteredDrinks] = useState([]);

  const requestAll = function(){
    const request = new Request();
    const foodPromise = request.get('api/foods')
    const drinkPromise = request.get('api/drinks')


    Promise.all([foodPromise, drinkPromise])
    .then((data) => {
    setFoods(data[0]);
    setDrinks(data[1]);
    let foodAndDrinksList = [...data[0]]
    Array.prototype.push.apply(foodAndDrinksList, data[1])

    setFilteredFoodsAndDrinks(foodAndDrinksList);
    })
  }

  useEffect(()=> {
    requestAll()
  }, [])

  const changeTester = function(){
    setTester(!tester)
  }

  const filter = (searchMenu) => {
    const lowerSearch = searchMenu.toLowerCase();
    const filteredFoodsAndDrinks = foods.filter((food) => {
      return food.title.toLowerCase().indexOf(lowerSearch) > -1;
    });

    const filteredDrinks = drinks.filter((drink) => {
      return drink.title.toLowerCase().indexOf(lowerSearch) > -1;
    });
    setFilteredFoodsAndDrinks(filteredFoodsAndDrinks);
    setFilteredDrinks(filteredDrinks);
  }

  

  const handleDelete = function(id){
    const request = new Request();
    const url = "api/foods" + id
    request.delete(url)
    .then(()=> window.location ="/foods")
  }
  useEffect(()=> {
    setOrderItems(orderItems);
    changeTester();
  })

  if(!foods){
    return null
  }

   return (
  
        <>
          <Filter handleChange={filter} />         
          <FoodList 
          addToFoodCount={addToFoodCount}
          subtractFromFoodCount={subtractFromFoodCount}
          foods={filteredFoodsAndDrinks}
          />

          
          <DrinkList 
          drinks={filteredDrinks}
          addToDrinkCount={addToDrinkCount}
          subtractFromDrinkCount={subtractFromDrinkCount}
          />
          <SitInOrTakeOutOption />
          <ViewBasket  
          orderItems = {orderItems}
          key = {key}
          setOrderItems = {setOrderItems}
          test = {test}
          setTest = {setTest}
          />
          <Link id="checkout-link"
          to="/checkout"
          orderItems={orderItems}
          key={checkoutKey}
          setCheckoutKey={setCheckoutKey}
          addToFoodCount={addToFoodCount}
          subtractFromFoodCount={subtractFromFoodCount}
          addToDrinkCount={addToDrinkCount}
          subtractFromDrinkCount={subtractFromDrinkCount}
          changeTester={changeTester}
          >Checkout</Link>  
        </>
    )
}

export default MenuContainer;
