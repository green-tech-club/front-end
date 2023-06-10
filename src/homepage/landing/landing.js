import React from 'react';
import './landing.css';
import back from './back.png'
import highlighter from './highlight.png'
import GreenButton from '../../stylingComponents/buttons/greenButton';
import TextP from '../../stylingComponents/Texts/Paragraph';
import SidebarTwo from "../../logindashboard/sidebar/sidebartwo";

function Landing(){
    return(
        <div className='container' >
            <div className='content'>
                <div className='emptymt'></div>
                <h1 className='fst_title'>Together fighting</h1>
                <div className='FancyTitle'>
                    <h1 className='fst_title'>against</h1>
                    <img src={highlighter} className='Highlighter'></img>
                </div>
                <div className='subtitle'><TextP fontsize='18pt' colour='white' name="We are a reliable source of information and resources to help individuals and organizations understand the causes, effects, and solutions to pollution."></TextP></div>
                <div className='CTO-btn'><GreenButton size='large' name='Learn more'></GreenButton></div>
                
            </div>

        </div>
    )
}
export default Landing