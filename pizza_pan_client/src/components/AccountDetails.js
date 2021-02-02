import React from 'react'
import ".././style/account.css";


const AccountDetails = () => {
    return (
        <>
        <form>
            <label for="name">Name:</label>
            <input type="text" placeholder="Your name"/>
            <label for="email">Email:</label>
            <input type="text" placeholder="Your email"/>
            <label for="password">Password</label>
            <input type="password" placeholder="Your password"/>
            <input type="submit" value="Submit"/>

        </form>
        </>
    )
}

export default AccountDetails
