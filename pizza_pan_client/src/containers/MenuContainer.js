import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import DrinkList from '../components/menu/DrinkList';
import FoodList from '../components/menu/FoodList';
import SitInOrTakeOutOption from '../components/menu/SitInOrTakeOutOption';
import ViewBasket from '../components/menu/ViewBasket';
import Request from '../helpers/request'


const MenuContainer = () => {
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [orderItems, setOrderItems] = useState([]);

  const requestAll = function(){
    const request = new Request();
    const foodPromise = request.get('api/foods')
    const drinkPromise = request.get('api/drinks')


    Promise.all([foodPromise, drinkPromise])
    .then((data) => {
    setFoods(data[0]);
    setDrinks(data[1])
    })
  }

  useEffect(()=> {
    requestAll()
  }, [])

  const findPirateById = function(id){
    return foods.find((food) => {
      return food.id === parseInt(id);
    })
  }

  const handleDelete = function(id){
    const request = new Request();
    const url = "api/foods" + id
    request.delete(url)
    .then(()=> window.location ="/foods")
  }

  const addToFoodCount = function(food){
    console.log("got this far");
    orderItems.push(food)    
    console.log(orderItems)
  }

  const subtractFromFoodCount = function(){
    console.log("got this far");
  }

  if(!foods){
    return null
  }
   return (
  
        <>
          <FoodList 
          foods={foods}
          addToFoodCount={addToFoodCount}
          subtractFromFoodCount={subtractFromFoodCount}
          />
          <DrinkList drinks={drinks}/>
          <SitInOrTakeOutOption />
          <ViewBasket />  
        </>
    )
}

export default MenuContainer
