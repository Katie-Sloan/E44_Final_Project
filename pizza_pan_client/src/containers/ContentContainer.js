import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MenuContainer from './MenuContainer';
import AccountDetails from '../components/AccountDetails';
import NavBar from '../components/header/NavBar'

const ContentContainer = ( {orderItems, key, setOrderItems, test, setTest, addToFoodCount, subtractFromFoodCount, addToDrinkCount, subtractFromDrinkCount, user, setUser, onCreate}) => {

    return(
        <Router>

            <>
            <NavBar/>

            <Switch>
                
                <Route path="/menu" render={() => 
                        <MenuContainer
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
                    }
                />
                <Route path="/account" render={() => {

                    return <AccountDetails 
                            user={user} 
                            setUser={setUser} 
                            onCreate={onCreate}
                            />
                }}/>
                
            </Switch>
            </>

        </Router>
    )
}            
export default ContentContainer
