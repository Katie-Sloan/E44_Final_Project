import React, {useState} from 'react'
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
}

export default AccountDetails
