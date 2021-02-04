import React from 'react';
import '../../style/menu.css';

const ViewBasket = (props) => {
    
    if(props.orderItems == null) {
        return null;
    }

    const basketData = props.orderItems.map((item) => {
        
        return (
            <div key = {props.key}>
                {item.title}
            </div>
        )

    })
    
    return (
        <div id="sidebar">
            <p>{basketData}</p>
        </div>
    )



}

export default ViewBasket
