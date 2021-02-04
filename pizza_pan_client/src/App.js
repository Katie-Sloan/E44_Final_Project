
import './style/App.css';
import MainContainer from './containers/MainContainer';
import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/header/AppHeader';
import Filter from './components/menu/Filter';
import Request from './helpers/request.js'



function App() {
  const [user, setUser] = useState({})
  const [users, setUsers] =useState({})

  useEffect(() => {
    const request = new Request();
    request.get('api/users')
    .then((data) => {
      setUsers(data);
    })
  })



// creates new user in api
     const handlePost = function(user){
        const request = new Request();
        request.post("api/users", user)
        .then(res => res.json())
        .then((currentUser) => {
            setUser(currentUser)
            window.history.pushState(user, '', 'http://localhost:3000/menu')
        })        
    }

    const findUserById = function(id){
      return users.find((user) => {
        return user.id === parseInt(id);
      })
    }


  return (
    <>
    <AppHeader />
    <MainContainer user={user} setUser={setUser} onCreate={handlePost} users={users}/>
 
    </>
  )
}


export default App;
