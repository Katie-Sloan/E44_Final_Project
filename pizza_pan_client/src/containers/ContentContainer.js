import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MenuContainer from './MenuContainer';
import AccountDetails from '../components/AccountDetails';
import TempNavBar from '../components/header/TempNavbar'


const ContentContainer = ({user, setUser, onCreate}) => {
    // if(loadMenu){
    //     setLoadMenu(false)
    //     return <MenuContainer/>
    // }

    return(
        <Router>
            <>
            <TempNavBar/>
            <Switch>
                <Route path="/menu" component={MenuContainer}/>
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
