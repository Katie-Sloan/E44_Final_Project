
import './App.css';
import MainContainer from './containers/MainContainer';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/header/AppHeader';
import Filter from './components/menu/Filter';
import Request from './helpers/request.js'



function App() {
  const [user, setUser] = useState({})

     const handlePost = function(user){
        const request = new Request();
        request.post("api/users", user)
        .then(res => res.json())
        .then((currentUser) => {
            setUser(currentUser)
            window.history.pushState(user, '', 'http://localhost:3000/menu')
        })        
    }


  return (
    <>
    <AppHeader />
    <MainContainer user={user} setUser={setUser} onCreate={handlePost}/>
 
    </>
  )
}


export default App;
