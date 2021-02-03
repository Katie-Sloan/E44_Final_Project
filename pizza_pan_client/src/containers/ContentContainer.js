import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MenuContainer from './MenuContainer';
import AccountDetails from '../components/AccountDetails';
import TempNavBar from '../components/header/TempNavbar';
import Checkout from '../components/order_submission/Checkout';


const ContentContainer = ( {orderItems, key, setOrderItems, test, setTest, addToFoodCount, subtractFromFoodCount, addToDrinkCount, subtractFromDrinkCount, user, setUser, onCreate}) => {

    return(
        <Router>
            <>
            <TempNavBar/>
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
