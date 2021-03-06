import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MenuContainer from './MenuContainer';
import AccountDetails from '../components/AccountDetails';
import Payment from '../components/order_submission/Payment'
import Cards from 'react-credit-cards'

import Checkout from '../components/order_submission/Checkout';
import NavBar from '../components/header/NavBar'

const ContentContainer = ( {orderItems, key, setOrderItems, test, setTest, addToFoodCount, subtractFromFoodCount, addToDrinkCount, subtractFromDrinkCount, user, setUser, onCreate, users}) => {

    return(
        <Router>

            <>
            <NavBar/>

            <Switch>
                
                <Route path="/menu" render={() => {
                        return <MenuContainer
                        orderItems = {orderItems}
                        key = {key}
                        setOrderItems = {setOrderItems}
                        test = {test}
                        setTest = {setTest}
                        addToFoodCount={addToFoodCount}
                        subtractFromFoodCount={subtractFromFoodCount}
                        addToDrinkCount={addToDrinkCount}
                        subtractFromDrinkCount={subtractFromDrinkCount}
                        />
                    }}
                />
                <Route path="/account" render={() => {

                    return <AccountDetails 
                            user={user} 
                            setUser={setUser} 
                            onCreate={onCreate}
                            users={users}
                            />
                }}/>

                <Route path="/payment" render={() => {

                    return <Payment
                            orderItems={orderItems}
                    />
                }}/>
                
                <Route path="/checkout" render={() => {
                    return <Checkout
                    orderItems = {orderItems}
                    key = {key}
                    setOrderItems = {setOrderItems}
                    test = {test}
                    setTest = {setTest}
                    addToFoodCount={addToFoodCount}
                    subtractFromFoodCount={subtractFromFoodCount}
                    addToDrinkCount={addToDrinkCount}
                    subtractFromDrinkCount={subtractFromDrinkCount}
                    />
                }}/>
            </Switch>
            </>

        </Router>
    )
}            
export default ContentContainer
