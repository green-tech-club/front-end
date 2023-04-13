import React, {useState} from "react";
import Navbar from '../homepage/navbar/navbar';
import YouTube from 'react-youtube';
import {motion} from "framer-motion";
import back from "./backparis.jpg"
import  '../App.css'
import './parisagreement.css'
import HorDiv from '../stylingComponents/divs/EasyDivs';




function ParisA(){
  const [videoId, setVideoId] = useState('WiGD0OgK2ug');

   const opts = {
     height: '500',
     width: '900',
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
        <img src={back} className="backimgforparis"/>
        <div className="conatainervideo" >
            <YouTube videoId={videoId} opts={opts} />
        </div>
        <div id="paris-container">

        </div>
    <Navbar></Navbar>
        </motion.div>
);
}

export default ParisA