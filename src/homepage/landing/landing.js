import React from 'react';
import './landing.css';
import back from './back.png'
import highlighter from './highlight.png'
import GreenButton from '../../stylingComponents/buttons/greenButton';
import TextP from '../../stylingComponents/Texts/Paragraph';
function Landing(){
    return(
        <div className='container'>
            <img src={back}  draggable="false"></img>
            
            <div className='content'>
                <div className='emptymt'></div>
                <h1 className='fst_title'>This is a heading</h1>
                <div className='FancyTitle'>
                    <h1 className='fst_title'>about</h1>
                    <img src={highlighter} className='Highlighter'></img>
                </div>
                <div className='subtitle'><TextP colour='white' name="Lorem ipsum dolor sit amet consectetur.<br> Gravida sed tellus condimentum et est eu nunc."></TextP></div>
                <div className='CTO-btn'><GreenButton size='large' name='Some call to action text'></GreenButton></div>
                
            </div>
            
        </div>
    )
}
export default Landing