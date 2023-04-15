import React, {useState} from "react";
import Navbar from '../homepage/navbar/navbar';
import YouTube from 'react-youtube';
import {motion} from "framer-motion";
import back from "./backparis.jpg"
import  '../App.css'
import './parisagreement.css'
import TextP from "../stylingComponents/Texts/Paragraph";
import TextTitle from "../stylingComponents/Texts/Title";
import Footer from "../homepage/footer/footer";
import GreenButton from "../stylingComponents/buttons/greenButton";
import { Link } from "react-router-dom";

function ParisA(){
  const [videoId, setVideoId] = useState('WiGD0OgK2ug');

   const opts = {
     height: '440',
     width: '792',
     playerVars: {
       // https://developers.google.com/youtube/player_parameters
       autoplay: 1,
    },
   };


    return(
        <motion.div 
        initial={{ opacity: 0 , x:20}}
        animate={{ opacity: 1 , x:0 }}
        transition={{ ease: "easeOut", duration: 0.5}}
        className="paris-page-container"
        >
            <div className='paris-header'>  
                <img src={back} alt="background" draggable="false"></img>
                <div className='content'>  
                <div className='empty-margin-top'></div>
                <div className='ParisTitle'>
                    <TextTitle name="The Paris Agreement" colour= "white"></TextTitle>
                </div>
                <div className='ParisSubtitle'>
                <TextP name="Learn more about the Paris Agreement and what its goals" colour='white'>
                </TextP> 
                </div>
                </div>
            </div>   
        <div className="pa-info-container">

          <div className="pa-info-text">
            <div className="pa-info-title">
              <TextTitle name="The Paris Agreement" colour="black"></TextTitle>
            </div>
            <div className="line"></div>
            <div className="pa-info-p">
              <TextP name="Climate change is a global emergency that goes beyond national borders. It is an issue that requires international cooperation and coordinated solutions at all levels.
              <br><br>To tackle climate change and its negative impacts, world leaders at the UN Climate Change Conference (COP21) in Paris reached a breakthrough on 12 December 2015: the historic Paris Agreement.
              <br><br>The Agreement sets long-term goals to guide all nations:<br>
              <br>  -Substantially reduce global greenhouse gas emissions to limit the global temperature increase in this century to 2 degrees Celsius while pursuing efforts to limit the increase even further to 1.5 degrees.
              <br>  -Review countries’ commitments every five years
              <br>  -Rrovide financing to developing countries to mitigate climate change, strengthen resilience and enhance abilities to adapt to climate impacts."
              colour="black" fontsize="14pt">
              </TextP>
              <div className="gotoUNwebsite">
              <Link className="gotoUNwebsite" target="_blank" rel="noopener noreferrer" to='https://www.un.org/en/climatechange/paris-agreement'>
              <GreenButton name="Check official website" size="small"></GreenButton>
              </Link>
              </div>
            </div>
          </div>

          
        <div className="conatainervideo" >
            <YouTube videoId={videoId} opts={opts} />
        </div>

        </div>
        <div id="paris-container">
        
        </div>
        <Footer></Footer>
    <Navbar></Navbar>
        </motion.div>
);
}

export default ParisA