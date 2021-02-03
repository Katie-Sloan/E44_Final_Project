import React from 'react'

const ViewBasket = (props) => {
    
    const basketData = props.orderItems.map((item) => {

        return (
            <div key = {props.propKey}>
                {item.title}
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
