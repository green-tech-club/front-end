import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import "../loginpage/LoginPage.css";
import return_btn from '../loginpage/return.png';
import {Link, useNavigate} from "react-router-dom";
import "./SignUpPage.css";

function SignUpPage() {
    const [formData, setFormData] = React.useState({
        name: "",
        username: "",
        password: "",
        repeatPassword: "",
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
        if(localStorage.getItem("access_token") !== null)
        {
            navigate('/')
        }
    },[1])

    function handleSubmit(event) {
        event.preventDefault()

        if (formData.password !== formData.repeatPassword) {
            alert("Passwords do not match!")
            return
        }

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };

        function sleep(ms){
            for(let t = Date.now(); Date.now() - t <= ms;);
        }

        let url = "http://gt.ochawork.shop/signup"

        fetch(url, requestOptions)
            .then(res => res.json())
            .then(data => {
                loginSuccess(data)
                alert("Sign up successful! Please log in.")
            })
            .catch(error => {
                    console.log(error)
                }
            )
    }
    function loginSuccess(data){
        navigate('/login')
    }

    return (
        <motion.div id="login-page"
                    className="page"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.8}}
        >
            <div id="sign-up-container" className="login-container">
                <div id="sign-up-form" className="login-form">
                    <Link to='/'>
                        <img id="return-btn" src={return_btn}/>
                    </Link>
                    <div className="welcome-section" id="sign-up-welcome-section">
                        <h1 id="welcome-text">Welcome back!</h1>
                        <h3 id="subwelcome-text" >Please enter your details</h3>
                        <div className='line'></div>
                    </div>
                    <form id="actual-sign-up-form" onSubmit={handleSubmit}>
                        <div className="login-field">
                            <label htmlFor="name" className="label-login">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="name"
                                placeholder="Name"
                                className="input-login"
                                onChange={handleChange}
                                value={formData.name}
                            />
                        </div>
                        <div className="login-field">
                            <label htmlFor="email" className="label-login">Email</label>
                            <input
                                id="email"
                                name="username"
                                type="email"
                                placeholder="Email"
                                className="input-login"
                                onChange={handleChange}
                                value={formData.username}
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
                                   value={formData.password}
                            />
                        </div>
                        <div className="login-field">
                            <label htmlFor="password" className="label-login">Repeat Password</label>
                            <input type="password"
                                   id="repeat-password"
                                   name="repeatPassword"
                                   placeholder="Repeat Password"
                                   className="input-login"
                                   onChange={handleChange}
                                   value={formData.repeatPassword}
                            />
                        </div>
                        <div className="login-field" id="btn-field">
                            <button type="submit" className="btn-login">Sign up</button>
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

export default SignUpPage;