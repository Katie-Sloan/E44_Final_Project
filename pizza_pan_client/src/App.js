
import './App.css';
import LoginButton from './components/header/LoginButton';
import LogoutButton from './components/header/LogoutButton';
import Profile from './components/header/Profile';
import MainContainer from './containers/MainContainer';
import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/header/AppHeader';
import { Menu } from 'antd';

function App() {
  return (
    <>
    <AppHeader />
      <div >
      <LoginButton />
      <LogoutButton />
      </div>
      <div >
      {/* <Menu /> */}
      </div >
      <MainContainer />
      
      <Profile />
      
    </>
  )
}


export default App;
