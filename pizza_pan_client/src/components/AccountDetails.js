import React, {useState} from 'react'
import ".././style/account.css";


const AccountDetails = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = (evt) => {
        setName(evt.target.value);
    }

    const handleEmailChange = (evt) => {
        setEmail(evt.target.value);
    }

    const handlePasswordChange = (evt) => {
        setPassword(evt.target.value);
    }

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        alert("testing");

        const nameToSubmit = name.trim();
        const emailToSubmit = email.trim();
        const passwordToSubmit = password.trim();
        if (!nameToSubmit || !emailToSubmit || !passwordToSubmit){
            return
        }
        setName("");
        setEmail("");
        setPassword("");
    }

    return (
        <>
        <h1>Update Account Details</h1>
        <form className="account-details-form" onSubmit={handleFormSubmit}>
            <label for="name">Name:</label>
            <input  
                type="text" 
                placeholder="Your name"
                value={name}
                onChange={handleNameChange}
            />

            <label for="email">Email:</label>
            <input 
                type="text" 
                placeholder="Your email"
                value={email}
                onChange={handleEmailChange}
            />

            <label for="password">Password</label>
            <input 
                type="password" 
                placeholder="Your password"
                value={password}
                onChange={handlePasswordChange}
            />

            <input type="submit" value="Submit"/>

        </form>
        </>
    )
}

export default AccountDetails
