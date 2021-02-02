import React from 'react'
import { Menu } from 'antd';
import pizzapan from './pizzapan.png'


const AppHeader = () => {
    return (
        <div className='container-fluid'>
        <div className='header' >
            <div className="logo" >
                <img src={pizzapan} alt="My logo" />
            </div>
            {/* <div className="menu-item">
            <Menu mode="horizontal" defaultSelectedKeys={['Home']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
            </div> */}
      </div>
        </div>
    )
}

export default AppHeader;
