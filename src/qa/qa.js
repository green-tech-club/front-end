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
import Footer from '../homepage/footer/footer';
import '../stylingComponents/buttons/greenButtons.css'
import closeimg from './close.jpeg'


function QAPage(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [question, setQuestion] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const butStyle = {
        borderColor: "transparent",
        marginTop: "3vh",
    };
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
        <div className='qacontainer'>
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
            <div className='QuestionsRow'>
            <div className='Question'>
                    <h1 className='QuestionTitle'>Do you have a question?</h1>
                    <div className='line'></div>
                    <p className='QuestionText'>Feel free to ask us anything. We will answer you in a short amount of time</p>
                    <button  className='green-btn'style={butStyle} onClick={() => setShowPopup(true)}><h className='green-btn-text-small'>Ask a Question</h></button>
                </div>
            </div>

        <div className='empty-margin-top'></div>
        <Footer></Footer>
        <Navbar></Navbar>
            <div className='button-div'>
               {showPopup &&
                 <div id="overlay" className="show">
                 <div id = "popup">
                    <div className='questionform'>
                    <button className='close-button' onClick={() => setShowPopup(false)}><img src={closeimg} className='qaclosebtn'></img></button>
                    <div className='questionformheader'>
                        <TextTitle name='Ask a question' colour='black' ></TextTitle>
                        <div className='line'></div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="login-field">
                            <label htmlFor="name" className="label-qa">Name</label>
                            <input className="input-qa" placeholder='Enter your name' type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="login-field">
                            <label htmlFor="email" className="label-qa">Email</label>
                            <input className="input-qa" placeholder='Enter a valid email' type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="login-field">
                            <label htmlFor="email" className="label-qa">Question</label>
                            <textarea className="input-qatext" placeholder='Type your question here' type="form-question" id="question" value={question} onChange={(e) => setQuestion(e.target.value)} required />
                        </div>
                     <button className='green-btn' style={butStyle} type="submit"><h1 className='green-btn-text-small'>Submit</h1></button>
                     </form>
                     </div>
                     </div>
                </div>
                }
                </div>
            </div>
            
        </motion.div>
    )

}
export default QAPage