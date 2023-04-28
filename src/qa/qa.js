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
    const [showConfirm, setShowConfirm] = useState(false);
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
            setShowConfirm(true);
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
                    <h1 className='QuestionTitle'>How are we tracking progress?</h1>
                    <div className='line'></div>
                    <p className='QuestionText'>With the Paris Agreement, countries established an enhanced transparency framework (ETF). 
                    Under ETF, starting in 2024, countries will report transparently on actions taken and progress in climate change 
                    mitigation, adaptation measures and support provided or received. It also provides for international procedures for 
                    the review of the submitted reports. The information gathered through the ETF will feed into the Global stocktake 
                    which will assess the collective progress towards the long-term climate goals.</p>
                    </div>
                <div className='Question'>
                    <h1 className='QuestionTitle'>What have we achieved so far?</h1>
                    <div className='line'></div>
                    <p className='QuestionText'>Although climate change action needs to be massively increased to achieve the goals of 
                    the Paris Agreement, the years since its entry into force have already sparked low-carbon solutions and new markets. 
                    More and more countries, regions, cities and companies are establishing carbon neutrality targets. Zero-carbon 
                    solutions are becoming competitive across economic sectors representing 25% of emissions. This trend is most 
                    noticeable in the power and  transport sectors and has created many new business opportunities for early movers.</p>
                </div>
            </div>
            <div className='QuestionsRow'>
                <div className='Question'>
                    <h1 className='QuestionTitle'>How is my country doing in terms of meeting its commitments under the Paris Agreement?</h1>
                    <div className='line'></div>
                    <p className='QuestionText'>You can view the statistics regarding your country by using the provded filters in our 
                    Statistics page. You can view a wide variety of data by using our filteration tools so feel free to try them out.</p>
                    </div>
                <div className='Question'>
                    <h1 className='QuestionTitle'>Can I use the data submitted in the ETF for my research and alaysis?</h1>
                    <div className='line'></div>
                    <p className='QuestionText'>You can view the climate data provided by the countries in our Statstics page. The 
                    financing and support between countries can also be viewed in the Financial Flow page. All the data you can view 
                    in our Statstics page is open to the public so feel free to use it Our goal is to include everyone in climate 
                    solutions so the data.</p>
                </div>
            </div>
            <div className='QuestionsRow'>
                <div className='Question'>
                    <h1 className='QuestionTitle'>How often is the data on your website updated?</h1>
                    <div className='line'></div>
                    <p className='QuestionText'>We update the data on our website as soon as it becomes available from the ETFs submitted 
                    by the countries. This includes data from countries' national greenhouse gas inventories and other climate-related 
                    data, which are typically submitted every two years as part of their 'national communications' under the Paris 
                    Agreement. While the frequency of updates may vary depending on the particular ETF or data source, we strive to keep 
                    our data as current as possible.</p>
                    </div>
                <div className='Question'>
                    <h1 className='QuestionTitle'>How will my donations be used?</h1>
                    <div className='line'></div>
                    <p className='QuestionText'>Not all developing countries have sufficient capacities to deal with many of the 
                    challenges brought by climate change. As a result, the Paris Agreement places great emphasis on climate-related 
                    capacity-building for developing countries and requests all developed countries to enhance support for 
                    capacity-building actions in developing countries. The donations recieved will also be a contributing factor to assist developing countries in dealing with climate change problems.</p>
                </div>
            </div>
            <div className='QuestionsRow'>
            <div className='Question'>
                    <h1 className='QuestionTitleQ'>Do you have a question?</h1>
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
            {showConfirm &&
                <div id="confirm_overlay" className="show">
                <div id = "confirm_popup">
                <div className='confirmform'>
                <button className='close-button' onClick={() => setShowConfirm(false)}><img src={closeimg} className='qaclosebtn'></img></button>
                <div className='confirmformheader'>
                    <TextTitle name='Question sent!' colour='black' ></TextTitle>
                    <div className='line'></div>
                    <p className='QuestionText'>we will answer your question shortly!</p>
                    </div>
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