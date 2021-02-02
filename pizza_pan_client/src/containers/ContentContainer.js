import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MenuContainer from './MenuContainer';
import AccountDetails from '../components/AccountDetails';

const ContentContainer = () => {
    return(
        <Router>
            <>
            {/* <Route exact path="/" component={Home}/> */}
            <Route path="/menu" component {...MenuContainer}/>
            <Route path="/account" component {...AccountDetails}/>
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
