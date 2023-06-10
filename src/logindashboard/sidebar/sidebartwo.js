import React, {useEffect, useRef, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import "./Sidebar.css";
import backendAddress from "../../backend-address.json";
import GreenButton from '../../stylingComponents/buttons/greenButton';
import '../../homepage/navbar/navbar.css'
import TextP from '../../stylingComponents/Texts/Paragraph';
import Flag from './flag';

const username = "Hungary"

const SidebarTwo = (props) => {

    const currentButton = useRef(null)
    const navigate = useNavigate()
    let pageid = "Dashboard";
    useEffect(() => {
        currentButton.current = document.getElementById('init-li');
    }, []);

    const handleButtonClick = (e) => {
        currentButton.current = e.target
        const button = e.target
        props.newPage(button.innerText)
        pageid = button.innerText;
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
                <div id='side-bar-li-back'/>
                <li className={`side-element-li  ${(pageid==="Dashboard")? "selected" : ""}`} id="init-li">Dashboard</li>
                <li className='side-element-li'>Form</li>
                <li className='side-element-li'>Settings</li>
                <li className='side-element-li'>Settings</li>
            </ul>
            <div className='logout-btn'>
                <Link to='/login' className="login-btn">
                    <GreenButton name="Log out" size="small"></GreenButton>
                </Link>
            </div>
        </div>
    );
};

export default SidebarTwo;
