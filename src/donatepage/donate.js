import React, { useState } from 'react';
import Navbar from '../homepage/navbar/navbar';
import '../App.css';
import './donate.css';
import {motion} from "framer-motion";
import back from'./backdonate.jpg'
import TextTitle from '../stylingComponents/Texts/Title';
import TextP from '../stylingComponents/Texts/Paragraph';
import HorDiv from '../stylingComponents/divs/EasyDivs';
import Footer from '../homepage/footer/footer';





function DonatePage() {
    const [cardNumber, setCardNumber] = useState('');
    const [expiration, setExpiration] = useState('');
    const [cvv, setCvv] = useState('');
    const [address,setAddress] = useState('');
    const [firstname,setFirst] = useState('');
    const [lastname,setLast] = useState('');
    const [telephone,setTelephone] = useState('');
    const [email,setEmail] = useState('');
    const [country,setCountry] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    let [paymentStep, setPaymentStep] = useState(0);
    const [paymentAmount, setPaymentAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const widths = ['10%' , '130%' , '260%']
    const [widthsIndex , setWidth] = useState(0);
    const boxVariants = {
      expanded: { width: widths[widthsIndex] },
      collapsed: { width:  '90pt'}
    };

    function handleClick(event) {
        const newValue = event.target.value;
        setPaymentAmount(newValue);
      }
      const handlePaymentAmountChange = (event) => {
        setPaymentAmount(event.target.value);
      };
      const handleNextClick = () => {
        if (paymentStep === 0 && paymentAmount) {
          setWidth((widthsIndex + 1));
          setPaymentStep(paymentStep + 1);
        } else if (paymentStep === 1 ) {
          setWidth((widthsIndex + 1));
          setPaymentStep(paymentStep + 1);
        } else if(paymentStep ===2 ){
          setPaymentStep(paymentStep + 1);
        } else if(paymentStep ===3){
          
        }
      };
      const handleLineLength = () => {
        setWidth((widthsIndex + 1));
      }
    
      function formatCreditCardNumber(inputValue) {
        // Removes all non-numeric characters
        let formattedValue = inputValue.replace(/[^0-9]/g, "");
      
        // Adds spaces between groups of 4 digits
        formattedValue = formattedValue.replace(/(\d{4})/g, "$1 ");
      
        // Removes any extra spaces at the end
        formattedValue = formattedValue.trim();
      
        return formattedValue;
      }
      
    function handleExpiryDateChange(event) {
        const expiration = event.target.value;
        const numbersOnly = expiration.replace(/[^0-9]/g, '');
        const formattedExpiryDate = formatExpiryDate(numbersOnly);
        setExpiration(formattedExpiryDate);
    }

    function formatExpiryDate(expiration) {
      const month = expiration.slice(0, 2);
      const year = expiration.slice(2, 4);
      return `${month}/${year}`;
    }
      
    function handleCreditCardNumberChange(event) {
      const cardNumber = event.target.value;
      const formattedValue = formatCreditCardNumber(cardNumber);   
       setCardNumber(formattedValue);
    }

    const handledigitInput = (event) => {
      const keyCode = event.keyCode || event.which;
      const keyValue = String.fromCharCode(keyCode);
      const isDigit = /^\d$/.test(keyValue);
      if (!isDigit) {
        event.preventDefault();
      }
    };
    const handleTelephone = (event) => {
      const inputPhoneNumber = event.target.value;
      const formattedPhoneNumber = inputPhoneNumber
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
      setTelephone(formattedPhoneNumber);
    };
        
return (
<motion.div
  initial={{ opacity: 0 , x:20}}
  animate={{ opacity: 1 , x:0 }}
  transition={{ ease: "easeOut", duration: 0.5}}>
  <div className='PaymentForm'>
  <img src={back} className="backimgfordonate" />
  <div id="donate-page-container">
    <div className='horidiv'>
      <div className='donate-content'>
        <TextTitle name='Donate now' colour='white' />
        <TextP name='Asalamu alaykom wa alaykum salam' colour='white' />
        <div className='donate-desc'>
          <TextP name='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br><br>
            1- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>
            2- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>
            3- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>
            4- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>'
            colour='white'
            fontsize='12pt'
          />
        </div>
      </div> 
      <div id="donate-container">
        <div id="donate-form">
          <div className="donate-section">
            <motion.div className="donate-line" style={{width: widths[widthsIndex]}} 
            animate={widths === "100px" ? "collapsed" : "expanded"}
            transition={{ duration: 0.5 }}
            variants={boxVariants}
            />
            <h3 className="donate-subtext">Please enter your details:</h3>
          </div>
          <div>
            <form id="donate-actual-form">
              {paymentStep === 0 && (
                <div  style={{ textAlign: "center" }}>
                  <label>
                    <input className="donate-input" type="text" onKeyPress={handledigitInput} value={paymentAmount} onChange={handlePaymentAmountChange} placeholder='Amount you want to donate' />
                  </label>
                  <button type="button" className="donate-btn"  onClick={handleNextClick}>Next</button> 
                </div>
              )}
              {paymentStep === 1 && (
                <div>
                 
                  <label>
                    <input className="donate-input" style={{width: '45%'}} type="text" value={firstname} onChange={(e) => setFirst(e.target.value)} required placeholder='First name' />
                    <input className="donate-input" style={{width: '45%',marginLeft: '10%'}} type="text" value={lastname} onChange={(e) => setLast(e.target.value)} required placeholder='Last name' />
                  </label>
                  
                  <label>
                    <input className="donate-input" type="text" value={address} onChange={(e) => setAddress(e.target.value)} required placeholder='address' />
                  </label>
                  
                  <label>
                    <input className="donate-input" type="text" value={telephone} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onKeyPress={handledigitInput} onChange={handleTelephone} required placeholder='telephone' list="country-codes"/>
                  <datalist id="country-codes">
                    <option value="+1">USA (+1)</option>
                    <option value="+44">UK (+44)</option>
                    <option value="+91">India (+91)</option>
                    <option value="+86">China (+86)</option>
                    {/* Add more country codes as needed */}
                  </datalist> 
                  </label>
                  
                  <label>
                    <input className="donate-input" type="text" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='example@gmail.com' />
                  </label>
                  <button type="button" className="donate-btn"  onClick={handleNextClick}>Next</button> 
                </div>
              )}
              {paymentStep === 2 && (
                <div>
                  <label>
                    <input className="donate-input" style={{textAlign: 'center'}} type="text" value={cardNumber} onChange={handleCreditCardNumberChange} required placeholder='Credt Card Number' /> 
                  </label>

                  <label>
                    <input className="donate-input" style={{width: '45%',textAlign: 'center'}} type="text" value={cvv} onKeyPress={handledigitInput} onChange={(e) => setCvv(e.target.value)} required placeholder='CVV' />
                    <input className="donate-input" style={{width: '45%',marginLeft: '10%',textAlign: 'center'}} type="text" value={expiration} onChange={handleExpiryDateChange} required placeholder='XX/XX' />
                  </label>
                  <button type="button" className="donate-btn"  onClick={handleNextClick}>Finish</button> 
                </div>
              )}
              {paymentStep === 3 &&(
                <div>
                  
                </div>
              )}
              
            </form> 
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  <Footer></Footer>
  <Navbar></Navbar>
</motion.div>

        
        );
        
    }

export default DonatePage; 
