import React, { useState } from 'react';
import Navbar from '../homepage/navbar/navbar';
import '../App.css';
import Footer from '../homepage/footer/footer';
import {motion} from "framer-motion";

function StatisticsPage(){

return(
    <motion.div
  initial={{ opacity: 0 , x:20}}
  animate={{ opacity: 1 , x:0 }}
  transition={{ ease: "easeOut", duration: 0.5}}>






<Footer></Footer>
<Navbar></Navbar>
</motion.div>
);
}
export default StatisticsPage;