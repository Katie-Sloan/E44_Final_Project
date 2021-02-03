import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MenuContainer from './MenuContainer';
import AccountDetails from '../components/AccountDetails';
import TempNavBar from '../components/header/TempNavbar'


const ContentContainer = ({onCreate}) => {
    return(
        <Router>
            <>
            <TempNavBar/>
            <Switch>
            <Route path="/menu" component={MenuContainer}/>
            <Route path="/account" render={() => {
            return <AccountDetails onCreate={onCreate}/>
            }}/>
        
            </Switch>
            </>

        </Router>
    )


    }

export default ContentContainer
