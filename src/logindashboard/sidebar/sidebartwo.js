import React, {useEffect, useRef, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import "./Sidebar.css";
import backendAddress from "../../backend-address.json";
import GreenButton from '../../stylingComponents/buttons/greenButton';
import '../../homepage/navbar/navbar.css'
import TextP from '../../stylingComponents/Texts/Paragraph';
import Flag from './flag';
import {useForceUpdate} from "framer-motion";

const username = "Hungary"

const SidebarTwo = () => {


    var pageid = window.location.pathname.split('/')[2];


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
                <Link to="/dashboard/home">
                <li className={`side-element-li ${(pageid==="home")? "selected" : ""}`} >
                    <a href="#" className={`side-element-a`}>Dashboard</a>
                </li>
                </Link>
                <Link to="/dashboard/submit-form">
                <li className={`side-element-li ${(pageid==="submit-form")? "selected" : ""}`} >
                    <a  href="#" className={`side-element-a`}>Form</a>
                </li>
                </Link>
                <Link to="/dashboard/setting">
                <li className={`side-element-li ${(pageid==="setting")? "selected" : ""}`} >
                    <a  href="#" className={`side-element-a`}>Settings</a>
                </li>
                </Link>
                <li className={`side-element-li ${(pageid==="Settings")? "selected" : ""}`}>
                    <a  href="#" className={`side-element-a`}>Settings</a>
                </li>
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
