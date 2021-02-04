
import Cards from 'react-credit-cards'
import React, { useState, setState} from 'react';

import 'react-credit-cards/es/styles-compiled.css'




const Payment = ({state, orderItems}) => {
    const payHandler = (e) => {
        e.preventDefault();
        alert('Order Confirmed')
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
