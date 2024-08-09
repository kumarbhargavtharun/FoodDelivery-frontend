import React, { useContext, useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assests/assets'; // Corrected assets path
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("LogIn");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "LogIn") {
      newUrl += '/api/user/login';
    } else {
      newUrl += '/api/user/register';
    }
    try {
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error during login/register:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className='login-popup'>
      <div className="login-popup-container">
        <form onSubmit={onLogin} className="login-popup-container">
          <div className="login-popup-title">
            <h2>{currState === "LogIn" ? "Log In" : "Sign Up"}</h2>
            <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="close" />
          </div>
          <div className="login-popup-inputs">
            {currState === "SignUp" && (
              <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />
            )}
            <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email' required />
            <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
          </div>
          <button type='submit'>{currState === "SignUp" ? "Create Account" : "Log In"}</button>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & Privacy policy.</p>
          </div>
          {currState === "LogIn" ? (
            <p>Create a new Account? <span onClick={() => setCurrState("SignUp")}>Click Here</span></p>
          ) : (
            <p>Already have an Account? <span onClick={() => setCurrState("LogIn")}>Login Here</span></p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
