import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MenuContainer from './MenuContainer';
import AccountDetails from '../components/AccountDetails';
import TempNavBar from '../components/header/TempNavbar'

const ContentContainer = () => {
    return(
        <Router>
            <>
            <TempNavBar/>
            <Switch>
            <Route exact path="/menu" component={MenuContainer}/>
            <Route path="/account" component={AccountDetails}/>
            </Switch>
            </>

        </Router>
    )







    // // logic goes here to determine what this is returning
    // if (true) {
    //     return <MenuContainer />
    // }

    // return (
    //     <AccountDetails />
    // )
}

export default ContentContainer
