import React, { useState, useEffect, useContext, useCallback } from "react";
import "./navbar.css";
import { Link } from 'react-router-dom'
import GreenButton from "../../stylingComponents/buttons/greenButton";
function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);
  let pagenum = 0;
  
  var pagePath = window.location.pathname;
  if(pagePath==="/faq") pagenum=4;
  if(pagePath==="/donate") pagenum=5;
  if(pagePath==="/paris-agreement") pagenum=1;
  if(pagePath==="/contact") pagenum=6;
  if(pagePath==="/statistics") pagenum=2;

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
        <a className="navbar-left">Greentech</a>
        </Link>
        <ul>
            <li className={`li ${(pagenum===0)? "selected" : ""}`}>
            <Link to='/'>
                <a href="#" className={`a ${(pagenum===0)? "selected" : ""}`}>Home</a>
                </Link>
            </li>
            <li className={`li ${(pagenum===1)? "selected" : ""}`}>
              <Link to='/paris-agreement'>
                <a href="#" className={`a ${(pagenum===1)? "selected" : ""}`}>Paris Agreement</a>
              </Link>
            </li>
            
            <li className={`li ${(pagenum===2)? "selected" : ""}`}>
            <Link to="/stats">
                <a href="#" className={`a ${(pagenum===2)? "selected" : ""}`}>Statistics</a>
            </Link>

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
              <Link to='/donate'>
                <a href="#" className={`a ${(pagenum===5)? "selected" : ""}`}>Donate</a>
              </Link>
            </li>
            <li className={`li ${(pagenum===6)? "selected" : ""}`}>
              <Link to='/contact'>
                <a href="#" className={`a ${(pagenum===6)? "selected" : ""}`}>Contact</a>
              </Link>
            </li>
      </ul>
        <Link to={localStorage.getItem("access_token") ? '/dashboard' : '/login'} className="login-btn">
            {!localStorage.getItem("access_token") &&
                <GreenButton name="Log in" size="small"></GreenButton>}
            {localStorage.getItem("access_token") &&
                <GreenButton name="Profile" size="small"></GreenButton>}
        </Link>
    </nav>
  );
}

export default Navbar;
