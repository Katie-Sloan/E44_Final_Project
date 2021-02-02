import React, {useState} from 'react'
import Request from '../helpers/request'
import ".././style/account.css";


const AccountDetails = () => {
    const [users, setUsers] = useState([]);

    const [stateUser, setStateUser] = useState(
        {
            name: "",
            email: "", 
            password: ""
        }
    )

    const requestAll = function(){
        const request = new Request();
        const userPromise = request.get('api/users')
        .then((data) => {
            setUsers(data);
        })
    }

    const handleChange = (evt) => {
        let propertyName = evt.target.name;
        let copiedUser = {...stateUser}
        copiedUser[propertyName] = evt.target.value;
        setStateUser(copiedUser)
    }

    // const handleEmailChange = (evt) => {
    //     setEmail(evt.target.value);
    // }

    // const handlePasswordChange = (evt) => {
    //     setPassword(evt.target.value);
    // }
    
    // const handleFormSubmit = (evt) => {
    //     evt.preventDefault();
    //     alert("testing");

    //     const nameToSubmit = name.trim();
    //     const emailToSubmit = email.trim();
    //     const passwordToSubmit = password.trim();
    //     if (!nameToSubmit || !emailToSubmit || !passwordToSubmit){
    //         return
    //     }
    //     setName("");
    //     setEmail("");
    //     setPassword("");
    // }

    return (
        <>
        <h1>Update Account Details</h1>
        <form className="account-details-form" >
            <label for="name">Name:</label>
            <input  
                type="text" 
                placeholder="Your name"
                value={stateUser.name}
                onChange={handleChange}
            />

            <label for="email">Email:</label>
            <input 
                type="text" 
                placeholder="Your email"
                value={stateUser.email}
                onChange={handleChange}
            />

            <label for="password">Password</label>
            <input 
                type="password" 
                placeholder="Your password"
                value={stateUser.password}
                onChange={handleChange}
            />

            <input type="submit" value="Save"/>

        </form>
        </>
    )
}

export default AccountDetails
