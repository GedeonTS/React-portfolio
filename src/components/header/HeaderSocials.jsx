import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" rel="noopener noreferrer" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" rel="noopener noreferrer" target="_blank">
        <BsGithub />
      </a>
      <a href="https://dribble.com" rel="noopener noreferrer" target="_blank">
        <BsDribbble />
      </a>
      <a href="https://twitter.com" rel="noopener noreferrer" target="_blank">
        <FiTwitter />
      </a>
    </div>
  );
}

export default HeaderSocials;
