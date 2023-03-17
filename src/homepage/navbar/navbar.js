import React, { useState, useEffect, useContext, useCallback } from "react";
import "./navbar.css";
import { Link } from 'react-router-dom'
function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);
  let pagenum = 0;
  
  var pagePath = window.location.pathname;
  if(pagePath==="/faq") pagenum=4;
  console.log(pagenum)

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
                <a href="#" >Home</a>
                </Link>
            </li>
            <li className={`li ${(pagenum===1)? "selected" : ""}`}>
                <a href="#">Paris Agreement</a>
            </li>
            <li className={`li ${(pagenum===2)? "selected" : ""}`}>
                <a href="#">Statistics</a>
            </li>
            <li className={`li ${(pagenum===3)? "selected" : ""}`}>
                <a href="#">Financial Flow</a>
            </li>
            <li className={`li ${(pagenum===4)? "selected" : ""}`}>
              <Link to='/faq'>
                <a href="#">Q&A</a>
              </Link>
            </li>
            <li className={`li ${(pagenum===5)? "selected" : ""}`}>
                <a href="#">Donate</a>
            </li>
            <li className={`li ${(pagenum===6)? "selected" : ""}`}>
                <a href="#">Contact</a>
            </li>
      </ul>
      <div className="login_but"> <p className="login_btn_text">Log in</p> </div>
    </nav>
  );
}

export default Navbar;
