import React from 'react';
import './footer.css';
import TextP from '../../stylingComponents/Texts/Paragraph';
import { Link } from 'react-router-dom';



function Footer(){
    return(
        <div className='footer-container' >
            
            <div className='footer-content1'>
                <div className='footer-t'><h1 className='footer-t'>Greentech</h1></div>
                <div className='footer-t'><TextP fontsize='14pt' colour='white' name="We are a reliable source of information and resources to 
                help individuals and organizations understand the causes, effects, and solutions to pollution."></TextP></div>
                
                <div className='social-icons'>
                    <div className='fb-ico'></div>
                    <div className='tw-ico'></div>
                    <div className='wa-ico'></div>
                    <div className='email-ico'></div>
                </div>
                
                
            </div>
            <div className='footer-content2'>
                <ul>
                    <li className='li-footer'>
                    <Link to='/'>
                        <a href="#" className='a footer'>Home</a>
                    </Link>
                    </li>
                    <li className='li-footer'>
                    <Link to='/paris-agreement'>
                        <a href="#" className='a footer'>Paris Agreement</a>
                    </Link>
                    </li>
                    <li className='li-footer'>
                        <a href="#" className='a footer'>About</a>
                    </li>
                    <li className='li-footer'>
                        <a href="#" className='a footer'>Contact</a>
                    </li>
                </ul>
                
            </div>
            
        </div>
    )
}
export default Footer