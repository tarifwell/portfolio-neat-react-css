import React from 'react';
import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";

// import logo from "./img/logo_nav_1.png";
import './Navbar.css';

const MOBILE_WIDTH = 500;
const TABLET_WIDTH = 1200;

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  // Refs for navbar and hamburger
  const navbarRef = useRef(null);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

    // Handle click outside of the navbar and hamburger to close the menu
    useEffect(() => {
      const handleClickOutside = (event) => {
        // Check if the click is outside the navbar and hamburger
        if (
          navbarRef.current &&
          !navbarRef.current?.contains(event.target)
        ) {
          closeMenu();
        }
      }

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
      
    }, []);
  
  // Resize logic to close menu on small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= TABLET_WIDTH) {
        closeMenu();
      }
    };

    handleResize(); // Initial check, if the menu should be closed on window resize

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const commonLinkProps = {
    onClick: closeMenu,
    activeClass: "navbar--active-content",
    spy: true,
    smooth: true,
    offset: -70,
    duration: 500,
    className: "navbar__content",
  };

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`} ref={navbarRef}>
      <div>
        <img src="./img/logo_nav_1.png" alt="Logo website" />
      </div>
      <div
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}        
        aria-expanded={navActive}
        aria-label="Menu toggle"
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </div>
      <div className={`navbar__items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link {...commonLinkProps} to="hero">Home</Link>
          </li>
          <li>
            <Link {...commonLinkProps} to="about">About Me</Link>
          </li>
          <li>
            <Link {...commonLinkProps} to="portfolio">Portfolio</Link>
          </li>          
          <li>
            <Link {...commonLinkProps} to="testimonial">Testimonials</Link>
          </li>
        </ul>
      </div>
      <Link {...commonLinkProps} to="contact" className="btn btn--outline-primary">
        Contact Me
      </Link>
    </nav>
  );
}

export default Navbar;
