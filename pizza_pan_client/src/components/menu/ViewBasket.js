import React from 'react'

const ViewBasket = (props) => {
    
    if(props.orderItems == null) {
        return null;
    }

    const basketData = props.orderItems.map((item) => {

        return (
            <div key = {props.key}>
                {props.orderItems.item.title}
            </div>
        )
    })
    
    return (
        <div>
            <p>Icon goes here to click and view basket</p>
            <p>{basketData}</p>
        </div>
    )



}

export default ViewBasket
