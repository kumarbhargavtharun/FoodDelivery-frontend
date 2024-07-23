import React, { useContext } from 'react'
import './PlaceOrder.css'

import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {

  const {getCartTotalAmount}=useContext(StoreContext);
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
            <input type="text" placeholder='First Name' />
             <input type="text" placeholder='Last Name' />
        </div>
            <input type="email" placeholder='E-mail Address' />
            <input type="text" placeholder='Street' />
        <div className="multi-fields">
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
            <input type="text" placeholder='Zip-Code' />
            <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Mobile No.' />


      </div>
           <div className="place-order-right">
           <div className="cart-total">
              <h2>Cart Totals</h2>
              <div className="cart-total-details">
                <p>SubTotal</p>
                <p>₹{getCartTotalAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
               
                <p>Delivery Fee</p>
                <p>₹{20}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>₹{getCartTotalAmount()+20}</b>
              </div>
              </div>
             
            <button className='checkout'>PROCEED TO PAYMENT</button>
           </div>
    </form>
  )
}

export default PlaceOrder;
