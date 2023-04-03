import React, { useState } from 'react';
import Navbar from '../homepage/navbar/navbar';
import '../App.css';
import './donate.css';
import {motion} from "framer-motion";
import back from'./backdonate.jpg'





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
          <img src={back} draggable="false"
           initial={{ opacity: 0 , x:20}}
           animate={{ opacity: 1 , x:0 }}
           transition={{ ease: "easeOut", duration: 0.5 }}
           style={{
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%',
          }}></img>
        <div className='content'>
                <div className='empty-margin-top'></div>
                <h1 className='DoanteTitle'>Donation Page</h1>
                <p className='FAQSubtitle'>You can find some questions with some answers</p>     
            </div> 
              
        <div className="payment-form" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          
          <div className="BubblyInput">
          <form onSubmit={handleSubmit}>

          
          <input type="text" id="name"  style={{  position: 'relative',marginBottom: '10px' ,marginBottom: '10px' ,backgroundColor: 'rgba(241, 241, 241, 0.8)' ,borderRadius: '5px'}} placeholder="Full Name on card" value={name} onChange={(e) => setName(e.target.value)} required /> 

          <input type="text" id="cardNumber"  pattern="[0-9]*" inputMode="numeric" autoComplete="cc-number" style={{ position: 'relative',marginBottom: '10px' ,marginBottom: '10px' ,backgroundColor: 'rgba(241, 241, 241, 0.8)' ,borderRadius: '5px'}} placeholder="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />

          <input type="date" id="expiration" style={{ position: 'relative',marginBottom: '10px' ,marginBottom: '10px' ,backgroundColor: 'rgba(241, 241, 241, 0.8)' ,borderRadius: '5px'}} placeholder="Expiration date" value={expiration} onChange={(e) => setExpiration(e.target.value)} required />

          <input type="text" id="cvv" style={{ position: 'relative', marginBottom: '10px',width: '50px' ,marginBottom: '10px' ,backgroundColor: 'rgba(241, 241, 241, 0.8)' ,borderRadius: '5px'}} placeholder="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} required />

          <button className="BubblyButton" type="submit">Submit Payment</button>
          </form>
          </div>
        </div>
        
        <Navbar></Navbar>
        </motion.div>
        
        );
        
    }

export default DonatePage; 
