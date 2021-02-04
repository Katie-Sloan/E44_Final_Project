import React, {useState} from 'react'
import Request from '../helpers/request'
import ".././style/account.css";


const AccountDetails = ({user, setUser, onCreate, users}) => {

 

    const [stateUser, setStateUser] = useState(
        {
            name: "",
            emailAddress: "",
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
        onCreate(stateUser);
    }

    const handleChangeUser = function(event) {
        event.preventDefault();
        setUser(event.value)
    }

    if(users === null){
        return (<p>Loading users</p>);
    }

    let usersMapped=[]
    for(let user of users){
        usersMapped.push(<option key = {user.id}>{user.name}</option>)
    }




    return(
        <>
            

            <select onChange= {handleChangeUser} value={user}> {usersMapped} </select>

       
        <form onSubmit= {handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" placeholder="Your name" name="name" onChange={handleChange} value={stateUser.name}/>
            <label htmlFor="email">Email:</label>
            <input type="text" placeholder="Your email" name="emailAddress" onChange={handleChange} value={stateUser.email_address}/>
            <label type="password">Password:</label>
            <input type="text" placeholder="Your password" name="password" onChange={handleChange} value={stateUser.password}/>
            <button type="submit">Save</button>
        </form>
        </>
    )
}

export default AccountDetails
