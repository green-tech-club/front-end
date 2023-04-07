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
    const [amount, setAmount] = useState('');


    const [clientSecret, setClientSecret] = useState("");

    function handleClick(event) {
        const newValue = event.target.value;
        setAmount(newValue);
      }

   //const handleSubmit = (event) => {
    //  event.preventDefault();
    //};
        

        return (
        <motion.div className="PaymentForm"
        initial={{ opacity: 0 , x:20}}
        animate={{ opacity: 1 , x:0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}>
          <img src={back} className="backimgfordonate" ></img>
          
          
          <div id="donate-page-container">
          <div className='horidiv'>
          <div className='donate-content'>
                
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
                    <div className="donate-section">
                        <div className="donate-line"></div>
                        <h3 className="donate-subtext">Please enter your details</h3>
                        </div>
                        <form id="donate-actual-form" style={{ textAlign: "center" }} >
                        <div className="donate-field">
                            <label className="donate-label" style={{fontSize:"30pt",textAlign:'center'}}>Amount:</label>
                            <div style={{marginTop:"30pt",justifyContent: 'center',alignItems:'center'}}>
                            <button type="button" className="donate-btn-amount" style={{width:'10%'}} onClick={handleClick} value="10">$10</button>
                            <button type="button" className="donate-btn-amount" style={{width:'10%'}} onClick={handleClick} value="50">$50</button>
                            <button type="button" className="donate-btn-amount" style={{width:'10%'}} onClick={handleClick} value="100">$100</button>
                            </div>
                            <input 
                                   id="amount"
                                   name="Amount"
                                   type="integer"
                                   placeholder="Amount"
                                   className="donate-input"
                                   style={{marginTop:'30%'}}
                                   value={amount}
                            />
                        </div>
                        <div className="donate-field" id="btn-field">
                            <button type="submit" className="donate-btn">Next</button>    
                        </div>
                    </form>
                </div>
            </div>
            </div>
            </div>
        <Navbar></Navbar>
        </motion.div>
        
        );
        
    }

export default DonatePage; 
