import React from 'react'
import MenuContainer from './MenuContainer';
import AccountDetails from '../components/AccountDetails';

const ContentContainer = () => {
    
    // logic goes here to determine what this is returning
    if (true) {
        return <MenuContainer />
    }

    return (
        <AccountDetails />
    )
}

export default ContentContainer
