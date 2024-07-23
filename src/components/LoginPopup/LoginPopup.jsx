import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assests/assets'
const LoginPopup = ({setShowLogin}) => {

    const[currState, setCurrState]=useState("Sign Up")
  return (
    <div className='login-popup'>
             <div className="login-popup-container">
         <form  className="login-popup-conatiner">
            <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img  onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="LogIn"?<></>:<input type="text" placeholder='Your Name' required/>                }
                <input type="email" placeholder='Email' required  />
                <input type="password" placeholder='Password' required />
               
            </div>
            <button >{currState==="Sign Up"?"Create Acoount":"LogIn"}</button>
           
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing, I agree to the terms of use & Privacy policy.</p>
            </div>
            {currState==="LogIn" ?<p>Create a new Account?<span onClick={()=>setCurrState("Sign Up")}>Click Here</span> </p>:
                               <p>Already have an Account?<span onClick={()=>setCurrState("LogIn")}>Login Here</span></p>}
            
         </form>
         </div>
    </div>
  )
}

export default LoginPopup
