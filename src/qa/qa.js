import React from 'react';
import './qa.css';
import Navbar from '../homepage/navbar/navbar';
import '../App.css'
import back from'./backqa.png'
import {motion} from "framer-motion"
import { renderMatches } from 'react-router-dom';

function QAPage(){
    
    return(
        <motion.div className="App"
        initial={{ opacity: 0 , x:20}}
        animate={{ opacity: 1 , x:0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}>
        <div className='container'>
            <img src={back}  draggable="false"></img>
            <div className='content'>
                <div className='empty-margin-top'></div>
                <h1 className='FAQTitle'>Frequently Asked Questions</h1>
                <p className='FAQSubtitle'>You can find some questions with some answers</p>     
            </div>   
            <div className='QuestionsRow'>
                <div className='Question'>
                    <h1 className='QuestionTitle'>Quesiton</h1>
                    <div className='line'></div>
                    <p className='QuestionText'>Lorem ipsum dolor sit amet consectetur. 
                    Lacinia in convallis nam feugiat lectus. Turpis quis id scelerisque 
                    diam mi lacus nulla id. Accumsan eget nisl quis ac consequat sollicitudin vestibulum. 
                    Sollicitudin blandit ac nibh fermentum viverra ornare. Donec diam scelerisque ipsum elementum.</p>
                    </div>
                <div className='Question'>
                    <h1 className='QuestionTitle'>Quesiton</h1>
                    <div className='line'></div>
                    <p className='QuestionText'>Lorem ipsum dolor sit amet consectetur. Lacinia in convallis nam feugiat lectus.</p>
                </div>
            </div>
            <div className='QuestionsRow'>
                <div className='Question'>
                    <h1 className='QuestionTitle'>Quesiton</h1>
                    <div className='line'></div>
                    <p className='QuestionText'>Lorem ipsum dolor sit amet consectetur. 
                    Lacinia in convallis nam feugiat lectus. Turpis quis id scelerisque 
                    diam mi lacus nulla id. Accumsan eget nisl quis ac consequat sollicitudin vestibulum. 
                    Sollicitudin blandit ac nibh fermentum viverra ornare. Donec diam scelerisque ipsum elementum.</p>
                    </div>
                <div className='Question'>
                    <h1 className='QuestionTitle'>Quesiton</h1>
                    <div className='line'></div>
                    <p className='QuestionText'>Lorem ipsum dolor sit amet consectetur. Lacinia in convallis nam feugiat lectus.</p>
                </div>
            </div>
            <div className='QuestionsRow'>
                <div className='Question'>
                    <h1 className='QuestionTitle'>Quesiton</h1>
                    <div className='line'></div>
                    <p className='QuestionText'>Lorem ipsum dolor sit amet consectetur. 
                    Lacinia in convallis nam feugiat lectus. Turpis quis id scelerisque 
                    diam mi lacus nulla id. Accumsan eget nisl quis ac consequat sollicitudin vestibulum. 
                    Sollicitudin blandit ac nibh fermentum viverra ornare. Donec diam scelerisque ipsum elementum.</p>
                    </div>
                <div className='Question'>
                    <h1 className='QuestionTitle'>Quesiton</h1>
                    <div className='line'></div>
                    <p className='QuestionText'>Lorem ipsum dolor sit amet consectetur. Lacinia in convallis nam feugiat lectus.</p>
                </div>
            </div>
            <div className='empty-margin-top'></div>
        </div>
        <Navbar></Navbar>
        </motion.div>

    )
}
export default QAPage