import React from 'react';
import './footer.css';
import TextP from '../../stylingComponents/Texts/Paragraph';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer(){
    return(
        <div className='footer-container' >
            
            <div className='footer-content1'>
                <div className='footer-t'><TextP fontsize='24pt' colour='white' name='Greentech'></TextP></div>
                <div className='footer-t'><TextP fontsize='14pt' colour='white' name="We are a reliable source of information and resources to 
                help individuals and organizations understand the causes, effects, and solutions to pollution."></TextP></div>
                <div className='social-icons'>
                <FontAwesomeIcon icon="fa-brands fa-facebook" size='10x' />

                </div>
                
                
            </div>
            <div className='footer-content2'>
                <div className='footer-t'><TextP fontsize='24pt' colour='white' name='Greentech'></TextP></div>
                <div className='footer-t'><TextP fontsize='14pt' colour='white' name="We are a reliable source of information and resources to 
                help individuals and organizations understand the causes, effects, and solutions to pollution."></TextP></div>
                
                
            </div>
            
        </div>
    )
}
export default Footer