import React, {useEffect, useRef, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import "./Sidebar.css";
import backendAddress from "../../backend-address.json";

const username = "Hungary"
const Sidebar = (props) => {
    const [backgroundPosition, setBackgroundPosition] = useState({ left: '-40%', top: '-3%', width: '200%' })
    const currentButton = useRef(null)
    const navigate = useNavigate()

    useEffect(() => {
        currentButton.current = document.getElementById('init-li');
    }, []);

    const handleButtonClick = (e) => {
        currentButton.current = e.target
        const button = e.target
        const buttonRect = button.getBoundingClientRect()
        const top = buttonRect.top - buttonRect.height * 2.6
        const left = '-40%'
        const width = '200%'
        props.newPage(button.innerText)

        setBackgroundPosition({left, top, width})
    }

    const handleButtonEnter = (e) => {
        if(e.target === currentButton.current) return
        const button = e.target
        const buttonRect = button.getBoundingClientRect()
        const top = buttonRect.top - buttonRect.height * 2.6
        const left = '-40%'
        const width = '42%'
        setBackgroundPosition({left, top, width})
    }

    const handleButtonLeave = (e) => {
        const buttonRect = currentButton.current.getBoundingClientRect()
        const top = buttonRect.top - buttonRect.height * 2.6
        const left = '-40%'
        const width = '200%'
        setBackgroundPosition({left, top, width})
    }

    const handleLogoutClick = () => {
        localStorage.clear()
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
        }
        const url = backendAddress.hostname+'/auth/logout'
        fetch(url, requestOptions)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                    console.log(error)
                }
            )
        navigate('/login')
    }

    return (
    <div className="sidebar">
      <div className="user-info">
        <h2>{username}</h2>
      </div>
      <ul className='side-element'>
        <div id='side-bar-li-back' style={backgroundPosition}/>
        <li className='side-element-li' id="init-li" onClick={handleButtonClick} onMouseEnter={handleButtonEnter} onMouseLeave={handleButtonLeave}>Dashboard</li>
        <li className='side-element-li' onClick={handleButtonClick} onMouseEnter={handleButtonEnter} onMouseLeave={handleButtonLeave}>Form</li>
        <li className='side-element-li' onClick={handleButtonClick} onMouseEnter={handleButtonEnter} onMouseLeave={handleButtonLeave}>Settings</li>
        <li className='side-element-li' onClick={handleLogoutClick} onMouseEnter={handleButtonEnter} onMouseLeave={handleButtonLeave}>Logout</li>
      </ul>
    </div>
  );
};

  export default Sidebar;