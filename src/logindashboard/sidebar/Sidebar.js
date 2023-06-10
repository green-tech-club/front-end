import React, {useEffect, useRef, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import "./Sidebar.css";
import backendAddress from "../../backend-address.json";
import GreenButton from '../../stylingComponents/buttons/greenButton';
import '../../homepage/navbar/navbar.css'
import TextP from '../../stylingComponents/Texts/Paragraph';
import Flag from './flag';

const username = "Hungary"
const Sidebar = (props) => {
    const [backgroundPosition, setBackgroundPosition] = useState({ left: '-20%', top: '-3%', width: '10%', height: '20%' })
    const currentButton = useRef(null)
    const navigate = useNavigate()

    useEffect(() => {
        currentButton.current = document.getElementById('init-li');
    }, []);

    const handleButtonClick = (e) => {
        currentButton.current = e.target
        const button = e.target
        const buttonRect = button.getBoundingClientRect()
        const top = buttonRect.top - buttonRect.height * 5.1
        const left = '-20%'
        const width = '10%'
        props.newPage(button.innerText)

        setBackgroundPosition({left, top, width})
    }

    const handleButtonEnter = (e) => {
        if(e.target === currentButton.current) return
        const button = e.target
        const buttonRect = button.getBoundingClientRect()
        const top = buttonRect.top - buttonRect.height * 4.77
        const left = '-20%'
        const width = '5%'
        const height = '10%'
        setBackgroundPosition({left, top, width, height})
    }

    const handleButtonLeave = (e) => {
        const buttonRect = currentButton.current.getBoundingClientRect()
        const top = buttonRect.top - buttonRect.height * 5
        const left = '-20%'
        const width = '10%'
        const height = '20%'
        setBackgroundPosition({left, top, width,height})
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
        <TextP name='Dashboard'></TextP>
        <div className='countryname-sidebar'>
            <div className='flag'>
            <Flag countryCode="hu" />
            </div>
        <h2>{username}</h2>
        </div>
      </div>
      <ul className='side-element'>
        <div id='side-bar-li-back' style={backgroundPosition}/>
        <li className='side-element-li' id="init-li" onClick={handleButtonClick} onMouseEnter={handleButtonEnter} onMouseLeave={handleButtonLeave}>Dashboard</li>
        <li className='side-element-li' onClick={handleButtonClick} onMouseEnter={handleButtonEnter} onMouseLeave={handleButtonLeave}>Form</li>
        <li className='side-element-li' onClick={handleButtonClick} onMouseEnter={handleButtonEnter} onMouseLeave={handleButtonLeave}>Settings</li>
        <li className='side-element-li' onClick={handleButtonClick} onMouseEnter={handleButtonEnter} onMouseLeave={handleButtonLeave}>Settings</li>
      </ul>
      <div className='logout-btn'>
      <Link onClick={handleLogoutClick} to='/login' className="login-btn">
                <GreenButton name="Log out" size="small"></GreenButton>
        </Link>
    </div>
    </div>
  );
};

  export default Sidebar;