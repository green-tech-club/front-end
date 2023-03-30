import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import "./LoginPage.css";
import return_btn from './return.png';
import {Link, useNavigate} from "react-router-dom";

function LoginPage() {
    const [formData, setFormData] = React.useState({
        username: "",
        password: "",
    })
    const navigate = useNavigate()

    //handle change in input fields
    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    //do not allow user to access login page if they are already logged in
    useEffect(()=>{
        if(sessionStorage.getItem("token") !== null)
        {
            navigate('/')
        }
    },[1])

    function handleSubmit(event) {
        event.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };

        function sleep(ms){
            for(let t = Date.now(); Date.now() - t <= ms;);
        }

        let url = "url place holder"

        fetch(url, requestOptions)
            .then(res => res.json())
            .then(data => {
                if(data.state === "placeholder") {
                    loginSuccess(data)
                    navigate('/dashboard')
                }
                //Error handling
                else{
                    /*
                      if(data.state === "placeholder"){
                        toast.error('Wrong password!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                    */
                }
            })
    }
    function loginSuccess(data){
        sessionStorage.setItem("token", data.placeholder)
        sessionStorage.setItem("private_key", data.placeholder)
    }

    return (
        <motion.div id="login-page"
             className="page"
             initial={{opacity: 0}}
             animate={{opacity: 1}}
             transition={{duration: 0.8}}
        >
            <div id="login-container">
                <div id="login-form">
                    <Link to='/'>
                        <img id="return-btn" src={return_btn}/>
                    </Link>
                    <div className="welcome-section">
                        <h1 id="welcome-text">Welcome back!</h1>
                        <h3 id="subwelcome-text" >Please enter your details</h3>
                        <div className='line'></div>
                    </div>
                    <form id="actual-form">
                        <div className="login-field">
                            <label htmlFor="username" className="label-login">Username</label>
                            <input type="text"
                                   id="username"
                                   name="username"
                                   placeholder="Username"
                                   className="input-login"
                                   onChange={handleChange}
                            />
                        </div>
                        <div className="login-field">
                            <label htmlFor="password" className="label-login">Password</label>
                            <input type="password"
                                   id="password"
                                   name="password"
                                   placeholder="Password"
                                   className="input-login"
                                   onChange={handleChange}
                            />
                        </div>
                        <div className="remember-me" >
                            <div className="remember-me">
                                <input type="checkbox" className="remember-me-field"></input>
                                <p className="remember-me-text">Remember me</p>
                            </div>
                            <p className="forgot-pass">Forgot password</p>
                        </div>
                        <div className="login-field" id="btn-field">
                            <button type="submit" className="btn-login">Login</button>
                            {//<button id="btn-dir-to-sign-up" className="btn-login">Sign up</button>}
                            }  
                            
                        </div>
                            
                    </form>
                </div>
            </div>
        </motion.div>
    );
}

export default LoginPage;