import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MenuContainer from './MenuContainer';
import AccountDetails from '../components/AccountDetails';
import TempNavBar from '../components/header/TempNavbar'


const ContentContainer = ( {orderItems, key, setOrderItems, test, setTest, addToFoodCount, subtractFromFoodCount, addToDrinkCount, subtractFromDrinkCount}) => {
    
    return(
        <Router>
            <>
            <TempNavBar/>
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
                <Route path="/account" component={AccountDetails}/>
                
           </Switch>
        </>
        </Router>
    )


    // return(
    //     <Router>
    //         <>
    //         <TempNavBar/>
    //         <Switch>
    //             <Route path="/menu" component={MenuContainer}/>
    //             <Route path="/account" render={() => {
    //                 return <AccountDetails user={user} setUser={setUser} onCreate={onCreate}/>
    //             }}/>
    //         </Switch>
    //         </>
    //     </Router>




    // // logic goes here to determine what this is returning
    // if (true) {
    //     return <MenuContainer />
    // }

    // return (
    //     <AccountDetails />
    // )
}

export default ContentContainer
