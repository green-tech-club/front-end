import React, { useState } from 'react';
import Navbar from '../homepage/navbar/navbar';
import '../App.css';
import './donate.css';
import {motion} from "framer-motion";
import back from'./backdonate.jpg'
import TextTitle from '../stylingComponents/Texts/Title';
import TextP from '../stylingComponents/Texts/Paragraph';
import HorDiv from '../stylingComponents/divs/EasyDivs';





function DonatePage() {
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiration, setExpiration] = useState('');
    const [cvv, setCvv] = useState('');

    const [clientSecret, setClientSecret] = useState("");

   const handleSubmit = (event) => {
      event.preventDefault();
  
    // Get the form data
    const formData = new FormData(event.target);
  
    // Add the text input value to the form data
    const textInput = event.target.elements.textInput.value;
    formData.append('textInput', textInput);
  
    // Send the data to the server
    fetch('/api/submit-form', {
    method: 'POST',
    body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log('Server response:', data);
    })
    .catch(error => {
    console.error('Error sending data:', error);
  });
    };
        

        return (
        <motion.div className="PaymentForm"
        initial={{ opacity: 0 , x:20}}
        animate={{ opacity: 1 , x:0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}>
          <img src={back} className="backimgfordonate" ></img>
          <div className='horidiv'>
          <div className='donate-content'>
                <div className='donate-empty-margin-top'></div>
                <TextTitle name='Donate now' colour='white'></TextTitle>
                <TextP name='Asalamu alaykom wa alaykum salam' colour='white'></TextP>
                <div className='donate-desc'>
                <TextP name='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br><br>
                1- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>
                2- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>
                3- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>
                4- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>'
                colour='white'
                fontsize='12pt'>
                </TextP>
                </div>
            </div> 

        
            <div id="donate-container">
                <div id="donate-form">
                    <div className="welcome-section">
                        <h1 id="welcome-text">Welcome back!</h1>
                        <h3 id="subwelcome-text" >Please enter your details</h3>
                        <div className='line'></div>
                    </div>
                    <form id="donate-actual-form" >
                        <div className="donate-field">
                            <label htmlFor="email" className="label-login">Email</label>
                            <input 
                                   id="email"
                                   name="email"
                                   type="email"
                                   placeholder="Email"
                                   className="input-login"
                            />
                        </div>
                        <div className="login-field">
                            <label htmlFor="password" className="label-login">Password</label>
                            <input type="password"
                                   id="password"
                                   name="password"
                                   placeholder="Password"
                                   className="input-login"
                            />
                        </div>
                        
                        <div className="login-field" id="btn-field">
                            <button type="submit" className="btn-login">Login</button>    
                        </div>
                    </form>
                </div>
            </div>
            </div>
        <Navbar></Navbar>
        </motion.div>
        
        );
        
    }

export default DonatePage; 
