import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import "./LoginPage.css";
import return_btn from './return.png';
import {Link, useNavigate} from "react-router-dom";

function LoginPage() {
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        rememberMe: false
    })
    const navigate = useNavigate()

    //handle change in input fields
    function handleChange(event) {
        if(event.target.type === "checkbox")
        {
            setFormData(prevFormData => ({
                ...prevFormData,
                rememberMe: event.target.checked
            }))
            return
        }
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
        if(localStorage.getItem("email") !== null)
        {
            setFormData(prevFormData => ({
                ...prevFormData,
                email: localStorage.getItem("email"),
                password: undefined,
                rememberMe: true
            }))
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

        let url = "http://localhost:8080/login"

        fetch(url, requestOptions)
            .then(res => res.json())
            .then(data => {
                if(data.access_token === "placeholder") {
                    loginSuccess(data)
                    navigate('/dashboard')
                }
                //Error handling
                else{
                    console.log(data)
                }
            })
    }
    function loginSuccess(data){
        //save email to local storage if remember me is checked
        if(formData.rememberMe === true){
            localStorage.setItem("email", formData.email)
        }
        else{
            localStorage.removeItem("email")
        }
        sessionStorage.setItem("access_token", data.access_token)
        navigate('/dashboard')
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
                    <form id="actual-form" onSubmit={handleSubmit}>
                        <div className="login-field">
                            <label htmlFor="email" className="label-login">Email</label>
                            <input 
                                   id="email"
                                   name="email"
                                   type="email"
                                   placeholder="Email"
                                   className="input-login"
                                   onChange={handleChange}
                                   value={formData.email}
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
                        <div className="remember-me" >
                            <div className="remember-me">
                                <input type="checkbox" name="rememberMe" className="remember-me-field" onChange={handleChange} checked={formData.rememberMe}></input>
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