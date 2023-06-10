import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import "./LoginPage.css";
import return_btn from './return.png';
import {Link, useNavigate} from "react-router-dom";
import backendAddress from "../backend-address.json";
import {toast, ToastContainer} from "react-toastify";

function LoginPage() {
    const [formData, setFormData] = React.useState({
        username: "",
        password: "",
    })
    const [rememberMe, setRememberMe] = React.useState(false)
    const navigate = useNavigate()

    //handle change in input fields
    function handleChange(event) {
        console.log(event.target.type)
        if(event.target.type === "checkbox")
        {
            setRememberMe(!rememberMe)
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
                username: localStorage.getItem("email"),
                password: undefined,
            }))
            setRememberMe(true)
        }
    },[1])

    function handleSubmit(event) {
        event.preventDefault()

        console.log('handleSubmit called');

        const tempForm = new URLSearchParams();
        tempForm.append('username', formData.username);
        tempForm.append('password', formData.password);
        tempForm.append('grant_type', 'password');

        console.log('Form data prepared');

        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/x-www-form-urlencoded' },
            body: tempForm
        };

        console.log('Request options prepared');

        function sleep(ms){
            for(let t = Date.now(); Date.now() - t <= ms;);
        }

        let url = backendAddress.hostname+"/auth/login"

        console.log('About to fetch', url);
        
        fetch(url, requestOptions)
            .then(res => {
                console.log('Got response:', res);
                return res.json();
            })
            .then(data => {
                console.log('Got data:', data);
                if(data.detail !== undefined)
                {
                    toast.error(data.detail, {
                        position: "top-center",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        })
                    return
                }
                loginSuccess(data)
            })
            .catch(error => {
                console.log('Fetch error:', error);
            }
        )

    }
    function loginSuccess(data){
        //save email to local storage if remember me is checked
        if(rememberMe === true){
            localStorage.setItem("email", formData.username)
        }
        else{
            localStorage.removeItem("email")
        }
        localStorage.setItem("access_token", data.access_token)
        toast.success("Welcome Back!", {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
        navigate('/dashboard/home')
    }

    return (
        <motion.div id="login-page"
                    className="page"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.8}}
        >
            <div id="login-container" className="login-container">
                <div id="login-form" className="login-form">
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
                            <div className="sign-up-text">
                                <p className="remember-me-text">Don't have an account?</p>
                                <Link to='/signup-code'>
                                    <p className="forgot-pass">Sign up</p>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer/>
        </motion.div>
    );
}

export default LoginPage;