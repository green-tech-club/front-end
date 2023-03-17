import React from 'react';
import './landing.css';
import back from './back.png'
import highlighter from './highlight.png'
function Landing(){
    return(
        <div className='container'>
            <img src={back}  draggable="false"></img>
            
            <div className='content'>
                <div className='empty-margin-top'></div>
                <h1 className='fst_title'>This is a heading</h1>
                <div className='FancyTitle'>
                    <h1 className='fst_title'>about</h1>
                    <img src={highlighter} className='Highlighter'></img>
                </div>
                <p className='subtitle'>Lorem ipsum dolor sit amet consectetur. Gravida sed <br></br>tellus condimentum et est eu nunc.</p>
                <div className="CTO_btn"> <p className="CTO_btn_text">Some call to action text</p> </div>
            </div>
            
        </div>
    )
}
export default Landing