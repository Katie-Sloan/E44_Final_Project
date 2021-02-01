
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import MainContainer from './containers/MainContainer';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <>
      <MainContainer />
      <LoginButton />
      <LogoutButton />
      <Profile />
    </>
  )
}


export default App;
