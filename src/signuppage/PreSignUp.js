import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import "../loginpage/LoginPage.css";
import return_btn from '../loginpage/return.png';
import {Link,Route, Navigate, useNavigate, Routes} from "react-router-dom";
import "./SignUpPage.css";
import countryCodes from './countryCodes.json';


function PreSignUp() {
    const [code, setCode] = useState('');

  const handleInputChange = (event) => {
    setCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Do something with the code value, e.g. submit it to a server
  }
    return (
        <motion.div id="login-page"
                    className="page"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0}}
        >
            <div className="presignup-container">
                <div id="sign-up-form" className="presignup-form">
                    <Link to='/'>
                        <img id="return-btn" src={return_btn}/>
                    </Link>
                    <div className="presignup-welcome-section" id="sign-up-welcome-section">
                        <h1 id="welcome-text">Create an account</h1>
                        <h3 id="subwelcome-text" >Please enter your access code.</h3>
                        <div className='line'></div>
                    </div>
                    <form id="actual-sign-up-form">
                        <div className="login-field">
                            <label htmlFor="name" className="label-login">Access code</label>
                            <input
                                id="name"
                                name="name"
                                type="name"
                                placeholder="Type your access code here"
                                className="input-login"
                                value={code}
                                onChange={handleInputChange}
                            />
                        </div>
                        
                        <div className="login-field" id="btn-field">
                            <Link to={`/signup/${code}`}>
                            <button type="submit" className="btn-login">Continue</button>
                            </Link>
                            {//<button id="btn-dir-to-sign-up" className="btn-login">Sign up</button>}
                            }
                            <div className="sign-up-text">
                                <p className="remember-me-text">Already have an account?</p> <p className="forgot-pass">Login</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    );
}

export default PreSignUp;