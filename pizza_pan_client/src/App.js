
import './App.css';
import Profile from './components/Profile';
import MainContainer from './containers/MainContainer';
import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/header/AppHeader';
import { Menu } from 'antd';

function App() {
  return (
    <>
    <AppHeader />
      
      
      <MainContainer />
      <Profile />
      
    </>
  )
}


export default App;
