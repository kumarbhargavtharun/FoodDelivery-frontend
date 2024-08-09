import React ,{useContext} from 'react'
import './Cart.css'

import {StoreContext} from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate=useNavigate();
  const {cartItems, food_list,removeFromCart, getCartTotalAmount,url}=useContext(StoreContext);
  return (
    <div className='cart'>
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
         <br />
         <hr />
          {food_list.map((item,index)=>{
                if(cartItems[item._id]>0){
                  return(
                   <div >
                     <div className="cart-items-title cart-items-item">
                      <img src={url+"/images/"+item.image} alt="" />
                        <p>{item.name}</p>
                        <p>₹ {item.price}</p>
                        <p>{cartItems[item._id]}</p>
                        <p>₹ {item.price*cartItems[item._id]}</p>
                        <p className='cross' onClick={()=>removeFromCart(item._id)}>X</p>
                       
                    </div>
                    <hr/>
                   </div>
                  )
                }
          })}

          </div>    
          <div className="cart-bottom">
            <div className="cart-total">
              <h2>Cart Totals</h2>
              <div className="cart-total-details">
                <p>SubTotal</p>
                <p>₹{getCartTotalAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
               
                <p>Delivery Fee</p>
                <p>₹{getCartTotalAmount()===0?0:20}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>₹{getCartTotalAmount()===0?0:getCartTotalAmount()+20}</b>
              </div>
              </div>
             
            
              <div className="cart-promocode">
                <div>
                  <p>If you have a promocode , Enter it here</p>
                  <div className="cart-promocode-input">
                    <input type="text" placeholder='promocode' />
                    <button>Submit</button>
                    </div>  
                  </div>
                 
                </div>
              
              </div>
              <button onClick= {()=>navigate('/order')} className='checkout'>PROCEED TO CHECKOUT</button> 
    </div>
  )
}

export default Cart;
