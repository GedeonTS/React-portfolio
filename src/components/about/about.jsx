import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FiAward } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function about() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ year working experience</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ clients worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>3+ year working experience</small>
            </article>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur cum ipsa quod odio suscipit, aspernatur ab maiores
              voluptatem sapiente atque magnam dolorem fugit accusamus rerum
              reprehenderit, exercitationem quaerat beatae ipsum?
            </p>
            <a href="#contact" className="btn btn-primary">Let's talk</a>
        </div>
      </div>
    </section>
  );
}

export default about;
