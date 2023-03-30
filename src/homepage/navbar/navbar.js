import React, { useState, useEffect, useContext, useCallback } from "react";
import "./navbar.css";
import { Link } from 'react-router-dom'
function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);
  let pagenum = 0;
  
  var pagePath = window.location.pathname;
  if(pagePath==="/faq") pagenum=4;
  //console.log(pagenum)

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <Link to='/'>
        <a className="navbar-left">Website</a>
        </Link>
        <ul>
            <li className={`li ${(pagenum===0)? "selected" : ""}`}>
            <Link to='/'>
                <a href="#" className={`a ${(pagenum===0)? "selected" : ""}`}>Home</a>
                </Link>
            </li>
            <li className={`li ${(pagenum===1)? "selected" : ""}`}>
                <a href="#" className={`a ${(pagenum===1)? "selected" : ""}`}>Paris Agreement</a>
            </li>
            <li className={`li ${(pagenum===2)? "selected" : ""}`}>
                <a href="#" className={`a ${(pagenum===2)? "selected" : ""}`}>Statistics</a>
            </li>
            <li className={`li ${(pagenum===3)? "selected" : ""}`}>
                <a href="#" className={`a ${(pagenum===3)? "selected" : ""}`}>Financial Flow</a>
            </li>
            <li className={`li ${(pagenum===4)? "selected" : ""}`}>
              <Link to='/faq'>
                <a href="#" className={`a ${(pagenum===4)? "selected" : ""}`}>Q&A</a>
              </Link>
            </li>
            <li className={`li ${(pagenum===5)? "selected" : ""}`}>
                <a href="#" className={`a ${(pagenum===5)? "selected" : ""}`}>Donate</a>
            </li>
            <li className={`li ${(pagenum===6)? "selected" : ""}`}>
                <a href="#" className={`a ${(pagenum===6)? "selected" : ""}`}>Contact</a>
            </li>
      </ul>
        <Link to='/login'>
            <div className="login_but"> <p className="login_btn_text">Log in</p> </div>
        </Link>
    </nav>
  );
}

export default Navbar;
