import React, { useState } from 'react';
import './qa.css';
import Navbar from '../homepage/navbar/navbar';
import '../App.css'
import back from'./backqa.png'
import {motion} from "framer-motion"
import emailjs from 'emailjs-com';
import { renderMatches } from 'react-router-dom';


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
                <h1 className='FAQTitle'>Frequently Asked Questions</h1>
                <p className='FAQSubtitle'>You can find some questions with some answers</p>     
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

            <div>
            <button onClick={() => setShowPopup(true)}>Ask a Question</button>
               {showPopup &&
                 <div id="overlay" className="show">
                 <div id = "popup">
                    <h2>Ask a Question</h2>
                    <form onSubmit={handleSubmit}>
                      <label htmlFor="name">Name:</label>
                      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                      <label htmlFor="email">Email:</label>
                      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                      <label htmlFor="question">Question:</label>
                       <textarea id="question" value={question} onChange={(e) => setQuestion(e.target.value)} required></textarea>
                       <button type="submit">Submit</button>
                   </form>
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