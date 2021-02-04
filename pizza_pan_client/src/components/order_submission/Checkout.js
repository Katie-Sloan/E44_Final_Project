import React from 'react'
import { Link } from 'react-router-dom'
const Checkout = () => {
    return (
        <div>
            <p> Load order details here </p>
            <Link
            to='/payment'>
                Go to Payment
            </Link>
            
        </div>
    )
}

export default Checkout
