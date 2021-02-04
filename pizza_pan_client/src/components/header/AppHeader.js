import React from 'react';
import pizzapan from './pizzapan.png';


const AppHeader = () => {
    return (
        <div className='container-fluid'>
        <div className='header' >
            <div className="logo" >
                <img src={pizzapan} alt="My logo" />
            </div>
      </div>
        </div>
    )
}

export default AppHeader;
