import React from 'react'
import DrinkList from '../components/menu/DrinkList'
import FoodList from '../components/menu/FoodList'
import SitInOrTakeOutOption from '../components/menu/SitInOrTakeOutOption'
import ViewBasket from '../components/menu/ViewBasket'

const MenuContainer = () => {
    return (
        <>
          <FoodList />
          <DrinkList />
          <SitInOrTakeOutOption />
          <ViewBasket />  
        </>
    )
}

export default MenuContainer
