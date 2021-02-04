
import Cards from 'react-credit-cards'
import React, { useState, setState} from 'react';

import 'react-credit-cards/es/styles-compiled.css'
import '../../style/payment.css'

import Request from '../../helpers/request'




const Payment = ({state, orderItems}) => {
    const foodList = [];
    const drinkList = [];
    const request = new Request();
    const payHandler = (event) => {
        event.preventDefault();
        // alert('Order Confirmed')
        sortFoodAndDrink();
        request.post('api/orders', {totalPrice: 50, foods: foodList, drinks: drinkList, user: 1, foodStatus:"PREPARATION"})
    }
    
    const sortFoodAndDrink = function() {
        for (const order of orderItems) {
            if (order.cookingTime > 0)
                foodList.push(order)
            else
                drinkList.push(order)
        }
    }


    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setCvc] = useState('')
    const [focus, setFocus] = useState('')
    return (
        <div>
            <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focus}
            />
            <form className='form-item'>
              <input 
                type='tel' 
                name='number' 
                placeholder='Card Number' 
                value={number} 
                onChange={e => setNumber(e.target.value)}  
                onFocus={e => setFocus(e.target.name)}
                />

                <input 
                type='text' 
                name='name' 
                placeholder='Name' 
                value={name} 
                onChange={e => setName(e.target.value)}  
                onFocus={e => setFocus(e.target.name)}
                />

                <input 
                type='text' 
                name='expiry' 
                placeholder='MM/YY Expiry' 
                value={expiry} 
                onChange={e => setExpiry(e.target.value)}  
                onFocus={e => setFocus(e.target.name)}
                />

                <input 
                type='tel' 
                name='cvc' 
                placeholder='CVC' 
                value={cvc} 
                onChange={e => setCvc(e.target.value)}  
                onFocus={e => setFocus(e.target.name)}
                />
                {/* <div>{state.message}</div> */}
                 <button onClick={payHandler} className="pay-btn">Pay Here</button>
            </form>            
        </div>
    )

}

export default Payment;
