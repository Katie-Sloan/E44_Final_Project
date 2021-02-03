import React from 'react';
import Login from './Login';
import Basket from './Basket';
import {FaBeer} from 'react-icons/fa';
import { Link } from "react-router-dom";

const NavBar = () => {
 
    return (
        <ul className='nav-item'>
            <li>
                <Link to="/menu">Menu</Link>
            </li>
            <li>
                <Link to="/account">Account</Link>
            </li>
            <li><FaBeer/></li>

          {/* <Basket />   */}
        </ul>
    )

}

export default NavBar;
