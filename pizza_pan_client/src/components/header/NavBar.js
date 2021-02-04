import React from 'react';
import Login from './Login';
import Basket from './Basket';
import {FaBeer, FaPizzaSlice, FaUserCog, FaShoppingBasket} from 'react-icons/fa';
import { Link } from "react-router-dom";
import '../../style/navBar.css'

const NavBar = () => {
 
    return (
        <ul className='nav-item'>
            <li>
                <Link to="/menu"><FaPizzaSlice className="icon"/>Order</Link>
            </li>
            <li>
                <Link to="/account"><FaUserCog className="icon"/>Account</Link>
            </li>
            <li> 
              <Link to="/basket"><FaShoppingBasket className="icon"/>Basket</Link>
            </li>
        </ul>
    )

}

export default NavBar;
