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
import GreenButton from '../stylingComponents/buttons/greenButton';
import { Link } from 'react-router-dom';





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
    const widths = ['33%' , '66%' , '100%']
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
      <div className='donate-content'>
        <TextTitle name='Donate now' colour='black' />
        <div className='line'></div>
        <TextP name='Asalamu alaykom wa alaykum salam' colour='black' />
        <div className='donate-desc'>
          <TextP name='Thank you for choosing to donate to our cause. Your generosity will help us fight climate change and protect our planet. To complete your donation, please follow these four simple steps:<br><br>
            1- Choose the amount you want to donate. You can select one of the preset options or enter a custom amount.<br><br>
            2- Fill in your personal and payment details. We accept credit cards, debit cards, and PayPal. Your information is secure and will not be shared with anyone.<br><br>
            3- Review your donation and confirm it. You will see a summary of your donation and the impact it will have. You can also choose to make your donation recurring or one-time.<br><br>
            4- Receive your confirmation and receipt. You will get an email with your donation confirmation and receipt. You can also download it from our website.'
            colour='black'
            fontsize='14pt'
          />
        </div>
      </div> 
      <div id="donate-container">
        <div id="donate-form">
          <div className="donate-section">
            <TextTitle name='Donate' colour='black' fontsize='24pt'></TextTitle>
            <TextTitle name={`Step ${widthsIndex+1} / 3`} colour="#00B088" fontsize='14pt'></TextTitle>
            <motion.div className="donate-line" style={{width: widths[widthsIndex]}} 
            animate={widths === "100px" ? "collapsed" : "expanded"}
            transition={{ duration: 0.5 }}
            variants={boxVariants}
            />
            {paymentStep ==2 ? <h3 id="text-above" className="donate-subtext" style={{opacity: "0"}}>Please enter your details:</h3> : <h3 id="text-above" className="donate-subtext">Please enter the amount you want to donate:</h3>}
          </div>
          <div>
            <form id="donate-actual-form">
              {paymentStep === 0 && (
                <div  style={{ textAlign: "center" }}>
                  <label>
                    <TextP name='Amount to donate' fontsize='14pt'></TextP>
                    <input  className="donate-input-usd" type="text" onKeyPress={handledigitInput} value={paymentAmount} onChange={handlePaymentAmountChange} placeholder='Please enter a number (USD)' />
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
                    <input className="donate-input" type="text" value={address} onChange={(e) => setAddress(e.target.value)} required placeholder='Address' />
                  </label>
                  
                  <label>
                    <input className="donate-input" type="text" value={telephone} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onKeyPress={handledigitInput} onChange={handleTelephone} required placeholder='Phone Number' list="country-codes"/>
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
                <div style={{textAlign: "center", marginBottom: "25%"}}>
                  <span className="checkmark">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12.5l3.5 3.5L18 7" fill="none" stroke="#00C853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                         </svg>
                      </span>
                    <TextTitle name='Payment Successful!' fontsize='24pt' colour='black'></TextTitle>
                    <Link to="/">
                    <button type="button" className="donate-btn" >Home Page</button>
                    </Link>
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
  <Footer></Footer>
  <Navbar></Navbar>
</motion.div>

        
        );
        
    }

export default DonatePage; 
