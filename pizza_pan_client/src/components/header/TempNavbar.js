import React from "react";
import { Link } from "react-router-dom";

const TempNavBar = () => {
    return (
        <ul>
            <li>
                <Link to="/menu">Menu</Link>
            </li>
            <li>
                <Link to="/account">Account</Link>
            </li>
        </ul>
    )

}

export default TempNavBar;