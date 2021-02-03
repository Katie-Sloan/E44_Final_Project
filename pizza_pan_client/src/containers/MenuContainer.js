import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import DrinkList from '../components/menu/DrinkList';
import FoodList from '../components/menu/FoodList';
import SitInOrTakeOutOption from '../components/menu/SitInOrTakeOutOption';
import ViewBasket from '../components/menu/ViewBasket';
import Request from '../helpers/request'
import Filter from '../components/menu/Filter'


const MenuContainer = ({orderItems, key, setOrderItems, test, setTest, addToFoodCount, subtractFromFoodCount, addToDrinkCount, subtractFromDrinkCount}) => {
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const[filteredFoods, setFilteredFoods] = useState([]);

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

    setFilteredFoods(foodAndDrinksList);
    })
  }

  useEffect(()=> {
    requestAll()
  }, [])

  const filter = (searchMenu) => {
    const lowerSearch = searchMenu.toLowerCase();
    const filteredFoods = foods.filter((food) => {
      return food.title.toLowerCase().indexOf(lowerSearch) > -1;
    });
    setFilteredFoods(filteredFoods);
  }

  const handleDelete = function(id){
    const request = new Request();
    const url = "api/foods" + id
    request.delete(url)
    .then(()=> window.location ="/foods")
  }
  useEffect(()=> {
    setOrderItems(orderItems);
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
          foods={filteredFoods}
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

export default MenuContainer;
