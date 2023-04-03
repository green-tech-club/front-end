import React, { useState } from 'react';
import './qa.css';
import Navbar from '../homepage/navbar/navbar';
import '../App.css'
import back from'./backqa.png'
import {motion} from "framer-motion"
import emailjs from 'emailjs-com';
import { renderMatches } from 'react-router-dom';
import TextTitle from '../stylingComponents/Texts/Title';
import TextP from '../stylingComponents/Texts/Paragraph';
import GreenButton from '../stylingComponents/buttons/greenButton';


function QAPage(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [question, setQuestion] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    
    function handleSubmit(event) {
        event.preventDefault();
        emailjs.send('service_jwaw1jn', 'template_6gs389b', {
          from_name: name,
          from_email: email,
          question: question,
        }, '_8jBYcVxOcYJdlLzl')
          .then((result) => {
            console.log(result.text);
            setShowPopup(false);
          }, (error) => {
            console.log(error.text);
          });
      }

    return(
        <motion.div className="App"
        initial={{ opacity: 0 , x:20}}
        animate={{ opacity: 1 , x:0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}>
        <div className='container'>
            <img src={back} alt="background" draggable="false"></img>
            <div className='content'>
                <div className='empty-margin-top'></div>
                <div className='FAQTitle'>
                    <TextTitle name="Frequently Asked Questions" colour= "white"></TextTitle>
                </div>
                <div className='FAQSubtitle'>
                <TextP name="You can find some questions with some answers" colour='white'>
                </TextP> 
                </div>
            </div>   
            <div className='QuestionsRow'>
                <div className='Question'>
                    <h1 className='QuestionTitle'>Question</h1>
                    <div className='line'></div>
                    <p className='QuestionText'>Lorem ipsum dolor sit amet consectetur. 
                    Lacinia in convallis nam feugiat lectus. Turpis quis id scelerisque 
                    diam mi lacus nulla id. Accumsan eget nisl quis ac consequat sollicitudin vestibulum. 
                    Sollicitudin blandit ac nibh fermentum viverra ornare. Donec diam scelerisque ipsum elementum.</p>
                    </div>
                <div className='Question'>
                    <h1 className='QuestionTitle'>Question</h1>
                    <div className='line'></div>
                    <p className='QuestionText'>Lorem ipsum dolor sit amet consectetur. Lacinia in convallis nam feugiat lectus.</p>
                </div>
            </div>
            <div className='QuestionsRow'>
                <div className='Question'>
                    <h1 className='QuestionTitle'>Question</h1>
                    <div className='line'></div>
                    <p className='QuestionText'>Lorem ipsum dolor sit amet consectetur. 
                    Lacinia in convallis nam feugiat lectus. Turpis quis id scelerisque 
                    diam mi lacus nulla id. Accumsan eget nisl quis ac consequat sollicitudin vestibulum. 
                    Sollicitudin blandit ac nibh fermentum viverra ornare. Donec diam scelerisque ipsum elementum.</p>
                    </div>
                <div className='Question'>
                    <h1 className='QuestionTitle'>Question</h1>
                    <div className='line'></div>
                    <p className='QuestionText'>Lorem ipsum dolor sit amet consectetur. Lacinia in convallis nam feugiat lectus.</p>
                </div>
            </div>
            <div className='QuestionsRow'>
                <div className='Question'>
                    <h1 className='QuestionTitle'>Question</h1>
                    <div className='line'></div>
                    <p className='QuestionText'>Lorem ipsum dolor sit amet consectetur. 
                    Lacinia in convallis nam feugiat lectus. Turpis quis id scelerisque 
                    diam mi lacus nulla id. Accumsan eget nisl quis ac consequat sollicitudin vestibulum. 
                    Sollicitudin blandit ac nibh fermentum viverra ornare. Donec diam scelerisque ipsum elementum.</p>
                    </div>
                <div className='Question'>
                    <h1 className='QuestionTitle'>Question</h1>
                    <div className='line'></div>
                    <p className='QuestionText'>Lorem ipsum dolor sit amet consectetur. Lacinia in convallis nam feugiat lectus.</p>
                </div>
            </div>

            <div className='button-div'>
            <button  className='green-btn' onClick={() => setShowPopup(true)}><h className='green-btn-text-small'>Ask a Question</h></button>
               {showPopup &&
                 <div id="overlay" className="show">
                 <div id = "popup">
                    <div id='pop-inside'>
                    <button className='close-button' onClick={() => setShowPopup(false)}><h>x</h></button>
                    <p className='title'>Ask a Question</p>
                    <div className='line'></div>
                    <form onSubmit={handleSubmit}>
                      <label className='paragraph' htmlFor="name">Name :    </label>
                      <div className='form-intlabel'></div>
                      <input className='form-input' placeholder='Name' type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                      <div className='form-intdiv'></div>
                      <label className='paragraph' htmlFor="email">Email :    </label>
                      <div className='form-intlabel'></div>
                      <input className='form-input' placeholder='Email' type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                      <div className='form-intdiv'></div>
                      <label className='paragraph' htmlFor="question">Question :    </label>
                      <div className='form-intlabel'></div>
                       <textarea placeholder='Enter your question here please' className='form-question' id="question" value={question} onChange={(e) => setQuestion(e.target.value)} required></textarea>
                       <button className='green-btn' type="submit"><h1 className='green-btn-text-small'>Submit</h1></button>
                     </form>
                     </div>
                </div>  
                </div>
                }
                </div>
                <div className='empty-margin-top'></div>
            </div>
        <Navbar></Navbar>
        </motion.div>
    )

}
export default QAPage