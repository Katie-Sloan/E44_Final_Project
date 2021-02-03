import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import DrinkList from '../components/menu/DrinkList';
import FoodList from '../components/menu/FoodList';
import SitInOrTakeOutOption from '../components/menu/SitInOrTakeOutOption';
import ViewBasket from '../components/menu/ViewBasket';
import Request from '../helpers/request'


const MenuContainer = ({orderItems, key, setOrderItems, test, setTest, addToFoodCount, subtractFromFoodCount, addToDrinkCount, subtractFromDrinkCount}) => {
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);
  // const [orderItems, setOrderItems] = useState([]);
  // const [propKey, setPropKey] = useState(1);
  // const [test, setTest] = useState(true);

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

  // useEffect(()=> {
  //   setOrderItems(orderItems);
  // })

  // const changeTest = function(){
  //   setTest(!test);
  // }

  // const addToFoodCount = function(food){
  //   console.log("got this far");
  //   let newOrderItems = orderItems;
  //   newOrderItems.push(food);
  //   setOrderItems(newOrderItems); 
  //   let newPropKey = propKey;
  //   newPropKey += 1;
  //   setPropKey(newPropKey);
  //   console.log(orderItems)
  // }

  // const subtractFromFoodCount = function(food){
  //   console.log("got this far")
  //   for (const order of orderItems) {
  //     if(food == order) {
  //       const index = orderItems.indexOf(order)
  //       orderItems.splice(index, 1);
  //       let newPropKey = propKey;
  //       newPropKey += 1;
  //       changeTest();
  //       console.log(orderItems);
  //       return;
  //     }
  //   }
  // }
    
  // const addToDrinkCount = function(drink){
  //   console.log("got this far");
  //   let newOrderItems = orderItems;
  //   newOrderItems.push(drink);
  //   setOrderItems(newOrderItems); 
  //   let newPropKey = propKey;
  //   newPropKey += 1;
  //   setPropKey(newPropKey);
  //   console.log(orderItems)
  // }

  // const subtractFromDrinkCount = function(drink){
  //   console.log("got this far")
  //   for (const order of orderItems) {
  //     if(drink == order) {
  //       const index = orderItems.indexOf(order)
  //       orderItems.splice(index, 1);
  //       let newPropKey = propKey;
  //       newPropKey += 1;
  //       changeTest();
  //       console.log(orderItems);
  //       return;
  //     }
  //   }
  // }  

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
          <DrinkList 
          drinks={drinks}
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
        </>
    )
}

export default MenuContainer
