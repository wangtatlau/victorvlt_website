import React from "react";
import styles from "./HomePage.module.css";
import NavbarLayout from "../components/layout/NavbarLayout";
import portrait from "../static/portrait.jpg";
import about from "../static/about.jpg";
import qVault from "../static/qVault.svg";
import siemens from "../static/siemens.svg";
//Tools
import react from "../static/toolbox/react.svg";
import js from "../static/toolbox/js.svg";
import aws from "../static/toolbox/aws.svg";
import cplusplus from "../static/toolbox/cplusplus.svg";
import django from "../static/toolbox/django.svg";
import flask from "../static/toolbox/flask.svg";
import flutter from "../static/toolbox/flutter.svg";
import java from "../static/toolbox/java.svg";
import python from "../static/toolbox/python.svg";
import postgresql from "../static/toolbox/postgresql.svg";
import scala from "../static/toolbox/scala.svg";
import ts from "../static/toolbox/ts.svg";
//Social
import ig from "../static/social/ig.svg";
import linkedin from "../static/social/linkedin.svg";
import mail from "../static/social/mail.svg";

const HomePage = () => {
  const handleAboutClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEmailClick = () => {
    const email = "victorlau@gmail.com";
    window.location.href = `mailto:${email}`;
  };

  return (
    <NavbarLayout>
      <div className={styles.mainContainer}>
        <section className={styles.homeSection} id="home">
          <div className={styles.homeContainer}>
            <div className={styles.homeLeft}>
              <h2 className={styles.title1}>Hello! I'm Victor.</h2>
              <h2 className={styles.title2}>I am a full-stack developer.</h2>
              <h2 className={styles.title2}>
                I mainly develop web applications.
              </h2>
              <button className={styles.btn18} onClick={handleAboutClick}>
                <span className={styles.textContainer}>
                  <span className={styles.text}>About me</span>
                </span>
              </button>
            </div>
            <div className={styles.homeRight}>
              <img className={styles.portrait} src={portrait} alt="portrait" />
            </div>
          </div>
        </section>
        <section className={styles.aboutSection} id="about">
          <div className={styles.aboutContainer}>
            <div className={styles.aboutLeft}>
              <img className={styles.aboutImg} src={about} alt="about" />
            </div>
            <div className={styles.aboutRight}>
              <h2 className={styles.title1}>About me</h2>
              <h2 className={styles.title3}>
                I am a 3rd year computer acience Student at King's College
                London,
              </h2>
              <h2 className={styles.title3}>
                the front-end lead at qvault.ai,
              </h2>
              <h2 className={styles.title3}>
                a placement intern at Siemens Mobility.
              </h2>
            </div>
          </div>
        </section>
        <section className={styles.experienceSection} id="experience">
          <div className={styles.experienceContainer}>
            <div className={styles.experienceLeft}>
              <h2 className={styles.title4}>My Experiences</h2>
              <img className={styles.jobImageMob} src={qVault} alt="qVault" />
              <div className={styles.jobDesContainer}>
                <h2
                  className={styles.title5}
                  onClick={() =>
                    window.open(
                      "https://qvault.ai/",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  qVault.ai
                </h2>
                <h2 className={styles.title6}>Front-end Lead</h2>
                <h5 className={styles.title3}>
                  An AI-powered quality centric question bank for medical
                  students
                </h5>
                <h5 className={styles.title3}>
                  Using cascading models to generate high quality questions set
                </h5>
              </div>
              <img className={styles.jobImageMob} src={siemens} alt="siemens" />
              <div className={styles.jobDesContainer}>
                <h2
                  className={styles.title5}
                  onClick={() =>
                    window.open(
                      "https://www.mobility.siemens.com/",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  Siemens Mobility
                </h2>
                <h2 className={styles.title6}>
                  Digitalisation Enginerring Support Intern
                </h2>
                <h5 className={styles.title3}>
                  Create React-based apps and scripts for internal
                  digitalisation and automation
                </h5>
                <h5 className={styles.title3}>
                  Part of the £1Bn ECDP project, improve the performace and
                  safety of railway
                </h5>
              </div>
            </div>
            <div className={styles.experienceRight}>
              <img className={styles.qVault} src={qVault} alt="qVault" />
              <img className={styles.siemens} src={siemens} alt="siemens" />
            </div>
          </div>
        </section>
        <section className={styles.toolboxSection} id="toolbox">
          <div className={styles.toolboxContainer}>
            <h2 className={styles.title1}>My toolbox</h2>
            <div className={styles.iconsContainer}>
              <img className={styles.tool} src={react} alt="react" />
              <img className={styles.tool} src={js} alt="js" />
              <img className={styles.tool} src={aws} alt="aws" />
              <img className={styles.tool} src={cplusplus} alt="cplusplus" />
              <img className={styles.tool} src={django} alt="django" />
              <img className={styles.tool} src={flask} alt="flask" />
              <img className={styles.tool} src={flutter} alt="flutter" />
              <img className={styles.tool} src={java} alt="java" />
              <img className={styles.tool} src={python} alt="python" />
              <img className={styles.tool} src={postgresql} alt="postgresql" />
              <img className={styles.tool} src={scala} alt="scala" />
              <img className={styles.tool} src={ts} alt="ts" />
            </div>
          </div>
        </section>
        <section className={styles.contactSection} id="contact">
          <div className={styles.contactContainer}>
            <div className={styles.contactLeft}>
              <h2 className={styles.title7}>Contact</h2>
              <h2 className={styles.title7}>Me!</h2>
            </div>
            <div className={styles.contactRight}>
              <h2 className={styles.title8}>
                Feel free to reach out to me here!
              </h2>
              <div className={styles.socialContainer}>
                <img
                  className={styles.ig}
                  src={ig}
                  alt="ig"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/vlt_03/",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                />
                <img
                  className={styles.linkedin}
                  src={linkedin}
                  alt="linkedin"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/victor-wang-tat-lau/",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                />
                <img
                  className={styles.mail}
                  src={mail}
                  alt="mail"
                  onClick={handleEmailClick}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </NavbarLayout>
  );
};

export default HomePage;
