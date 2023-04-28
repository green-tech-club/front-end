import React from "react";
import Navbar from "../homepage/navbar/navbar";
import {motion} from "framer-motion"
import back from "./contactback.jpg"
import './ContactPage.css'
import Footer from '../homepage/footer/footer';
import TextTitle from '../stylingComponents/Texts/Title';
import TextP from '../stylingComponents/Texts/Paragraph';

function ContactPage () {
    return (
    <motion.div className="App"
        initial={{ opacity: 0 , x:20}}
        animate={{ opacity: 1 , x:0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}>
        <div className="contactcontainer">
            <img src={back} alt="background" draggable="false" className="contactbackimg"></img>
            <div className='contactcontent'>
                <div className='empty-margin-top'></div>
                <div className='contactTitle'>
                <TextTitle name="Contact Information" colour= "white"></TextTitle>
                </div>
                <div className='contactSubtitle'>
                <TextP name="Don't hesitate to contact us" colour='white'>
                </TextP> 
                </div>
            </div>  
            <div className="contactRow">
                <div className="contactItem">
                    <h className="contactTitle">Please check our Q&A page before contacting us, as you might find your question listed.</h>
                    <div className='line'></div>
                    <div className="empty-margin-top"></div>
                </div>
            </div>
            <div className="contactRow">
                <div className="contactItem">
                    <h className="contactTitle">UN representative contact information</h>
                    <div className='line'></div>
                    <p className="contactText">
                        Person 1 (Hungary office): <br></br><br></br>
                        Email: <a href = "mailto: person1@example.com">person1@example.com</a> <br></br>
                        Fax Number: 123456789 <br></br>
                        Phone Number: <a href = "tel: +36 123 456 78">+36 123 456 78</a> <br></br>
                        Phone Number (Whatsapp): <a href = "tel: +36 212 121 34">+36 212 121 34</a>
                        <div className="empty-margin-top"></div>
                    </p>
                    <p className="contactText">
                        Person 2 (Austria office): <br></br><br></br>
                        Email: <a href = "mailto: person2@example.com">person2@example.com</a> <br></br>
                        Fax Number: 123456789 <br></br>
                        Phone Number: <a href = "tel: +43 123 456 78">+43 123 456 78</a> <br></br>
                        Phone Number (Whatsapp): <a href = "tel: +43 212 121 34">+43 212 121 34</a>
                        <div className="empty-margin-top"></div>
                    </p>
                </div>
                <div className="contactItem">
                <h className="contactTitle">Technical support contact information:</h>
                    <div className='line'></div>
                    <p className="contactText">
                        Specialist 1 (speciality): <br></br><br></br>
                        Email: <a href = "mailto: specialist1@example.com">specialist1@example.com</a> <br></br>
                        Fax Number: 123456789 <br></br>
                        Phone Number: <a href = "tel: +36 878 856 78">+36 878 856 78</a> <br></br>
                        Phone Number (Whatsapp): <a href = "tel: +36 888 777 34">+36 888 777 34</a>
                        <div className="empty-margin-top"></div>
                    </p>
                    <p className="contactText">
                        Specialist 2 (speciality): <br></br><br></br>
                        Email: <a href = "mailto: specialist2@example.com">specialist2@example.com</a> <br></br>
                        Fax Number: 123456789 <br></br>
                        Phone Number: <a href = "tel: +36 404 404 44">+36 404 404 44</a> <br></br>
                        Phone Number (Whatsapp): <a href = "tel: +36 404 404 44">+36 404 404 44</a>
                        <div className="empty-margin-top"></div>
                    </p>
                </div>
            </div>
            <div className="contactRow">
                <div className="contactItem">
                    <h className="contactTitle">Greentech social media accounts</h>
                    <div className="line"></div>
                    <p className="contactText"> <br></br>
                        Facebook: <a href = "www.facebook.com" target="_blank">Greentech Team</a> <br></br>
                        Twitter: <a href = "www.twitter.com" target="_blank">Greentech.Team</a> <br></br>
                        Email: <a href = "mailto: greentech@example.com">Greentech@example.com</a>
                    </p>
                </div>
            </div>
            <div className="empty-margin-top"></div>
            <div className="contactRow">
                <div className="contact Item">
                    <h className="contactTitle">Please allow up to 10 working days for our team to reply to your questions.</h>
                    <p className="contactText">We care about your input</p>
                </div>
            </div>
        </div>
        <div className='empty-margin-top'></div>
        <Footer></Footer>
        <Navbar></Navbar>
        </motion.div>
    )
}
export default ContactPage;