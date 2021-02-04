import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import JSONPretty from 'react-json-pretty'
import FoodList from '../menu/FoodList';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && ( 
        <div>
        <h2>{FoodList}</h2>
        <JSONPretty data={user} />
        </div>
    )
    )
}

export default Profile
