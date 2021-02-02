import React, {useState, useEffect} from 'react'
import Request from '../helpers/request'
import ".././style/account.css";

const AccountDetails = ({user}) => {

 
    const [stateUser, setStateUser] = useState(
        {
            name: "",
            email: "",
            password: ""
        }
    )

    const handleChange = function(event) {
        let propertyName = event.target.name;
        let copiedUser = {...stateUser}
        copiedUser[propertyName] = event.target.value;
        setStateUser(copiedUser)
    }

    const handleSubmit = function(event) {
        event.preventDefault();
        handlePost(stateUser);
    }

    const handlePost = function(user){
        const request = new Request();
        request.post("api/users", user)
        .then(() => window.location='/menu')
    }

    return(
        <>
        <form onSubmit= {handleSubmit}>
            <input type="text" placeholder="Your name" name="name" onChange={handleChange} value={stateUser.name}/>
            <input type="text" placeholder="Your email" name="email" onChange={handleChange} value={stateUser.email}/>
            <input type="text" placeholder="Your password" name="password" onChange={handleChange} value={stateUser.password}/>
            <button type="submit">Save</button>
        </form>
        </>
    )

    

   // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const handleNameChange = (evt) => {
    //     setName(evt.target.value);
    // }

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

    // return (
    //     <>
    //     <h1>Update Account Details</h1>
    //     <form className="account-details-form" onSubmit={handleFormSubmit}>
    //         <label htmlFor="name">Name:</label>
    //         <input  
    //             type="text" 
    //             placeholder="Your name"
    //             value={name}
    //             onChange={handleNameChange}
    //         />

    //         <label htmlFor="email">Email:</label>
    //         <input 
    //             type="text" 
    //             placeholder="Your email"
    //             value={email}
    //             onChange={handleEmailChange}
    //         />

    //         <label htmlFor="password">Password</label>
    //         <input 
    //             type="password" 
    //             placeholder="Your password"
    //             value={password}
    //             onChange={handlePasswordChange}
    //         />

    //         <input type="submit" value="Submit"/>

        // </form>
        // </>
    // )
}

export default AccountDetails
