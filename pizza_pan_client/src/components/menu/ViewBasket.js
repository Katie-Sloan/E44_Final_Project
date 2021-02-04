import React from 'react'

const ViewBasket = (props) => {
    
    if(props.orderItems == null) {
        return null;
    }

    // const getIdsAndCountsOfOrder = function() {
    //     const listOfIdsAndCount = [];
    //     for (let item of props.orderItems) {
    //         listOfIdsAndCount.push([item.id, 1])
    //         for (let orderItem of props.orderItems) {
    //             if (item.id == orderItem.id) {
    //                 for (let listItem of listOfIdsAndCount) {
    //                     if (listItem.id == item.id) {
    //                         listItem[1]++ 
    //                     }
    //                 }
    //             }
    //         }
    //         return listOfIdsAndCount;
    //     }
    // }

    // const getFinalOrder = function () {
    //     const order = [];
    //     const listOfIdsAndCount = getIdsAndCountsOfOrder();
    //     for (let item of listOfIdsAndCount) {
    //         for (let orderItem of props.orderItems) {
    //             if (item[0] == orderItem.id) {
    //                 orderItem.count = item[1]
    //             }
    //         }
    //     }
    // }

    const basketData = props.orderItems.map((item) => {
        
        return (
            <div key = {props.key}>
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
