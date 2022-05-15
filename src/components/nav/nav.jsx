import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { FiMessageCircle } from "react-icons/fi";
import { useState } from "react";

function nav() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="#" className={activeNav === '"#' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#experience">
        <BiBook />
      </a>
      <a href="#services">
        <RiServiceLine />
      </a>
      <a href="#contact">
        <FiMessageCircle />
      </a>
    </nav>
  );
}

export default nav;
