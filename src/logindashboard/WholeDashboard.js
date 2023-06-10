import React, {useLayoutEffect, useRef, useState} from 'react';
import './WholeDashboard.css';
import SidebarTwo from './sidebar/sidebartwo';
import Dashboard from './dashboard/Dashboard';
import FormSubmittingPage from "./formsubmittingpage/FormSubmittingPage";
import {motion} from "framer-motion";
import Landing from "../homepage/landing/landing";

function WholeDashboard() {


    let codeDashboard = window.location.pathname.split('/')[2];




    const fillerStyle= {
        width: "16%",
        height: "1%",
        backgroundColor: "#ffffff",
    }

    return (
        <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5}}>
        <div id="whole-dashboard">
            <SidebarTwo/>

            <div className="filler" style={fillerStyle}></div>
            {
                codeDashboard === "home" ? <Dashboard /> : null
            }
            {
                codeDashboard === "submit-form" ? <FormSubmittingPage /> : null
            }
            {
                codeDashboard === "setting" ? <Landing /> : null
            }
        </div>
        </motion.div>
    );
}
export default WholeDashboard;