import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
// Animation
import { motion } from "framer-motion";
import { linkAnim } from "../animations";
import { useScroll } from "../components/useScroll";

export default function Navbar() {
  // Setting nav mobile
  const [element, controls] = useScroll();
  const [click, setClick] = useState(false);

  // Close nav menu
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Change nav color
  const [color, setColor] = useState(false);
  const [icon, setIcon] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 65) {
      setColor(true);
      setIcon(true);
    } else {
      setColor(false);
      setIcon(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <Nav as={motion.nav}>
      <Logo as={motion.img} img src={logo}></Logo>
      <ul>
        <motion.li variants={linkAnim}>
          <a href="/">About Us</a>
        </motion.li>
        <motion.li variants={linkAnim}>
          <a href="/">Why preregister early</a>
        </motion.li>
        <motion.li variants={linkAnim}>
          <a href="/">Pre-registration</a>
        </motion.li>
      </ul>
    </Nav>
  );
}

// styling
const Nav = styled.nav`
  background-color: white;
  height: 65px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 99;
  ul {
    display: flex;
    padding: 0.3rem 4vw;
  }
  li {
    list-style-type: none; // remove bullet points
    a {
      font-family: "proxima-nova", sans-serif;
      font-size: 0.9rem;
      font-weight: 600;
      letter-spacing: 0.1rem;
      text-decoration: none; // removes underline
      text-transform: uppercase;
      text-align: center;
      margin: 0 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        color: green;
      }
    }
  }
`;

const Logo = styled.img`
  height: 3rem;
`;
