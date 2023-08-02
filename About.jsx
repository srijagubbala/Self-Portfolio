import React from 'react';
import "./about.css";
import Image from "../../assets/work-2.svg";
import AboutBox from "./AboutBox";

const About = () => {
    return (
        <section className="about container section" id='about'>
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={Image} alt="" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">I am Srija Gubbala, B.Tech Undergraduate.
                        I am Hardworking and eager Student in MKSSS’s Cummins
                        College Pune, also pursuing Honors Degree in Data
                        Science. Looking to use my strong logical and analytical skills
                        to build my career. Possess good communication abilities to
                        convey innovative ideas to diverse audiences of varying
                        technical expertise.</p>
                        <a href="" className="btn">Download CV</a>
                    </div>

                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Programming Languages</h3>
                                <span className="skills__number languages">C/C++, Core Java, HTML, CSS, JavaScript, Python basics, SQL Basics </span>
                            </div>

                            
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Coursework</h3>
                                <span className="skills__number coursework">Data Structure and Algorithms, DBMS, Advanced Programming (OOPS), Probability and Statistics, Machine Learning and Deep Learning.</span>
                            </div>

                            
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Soft Skills</h3>
                                <span className="skills__number soft">Creative, analytical skills, critical thinker, time management, problem solver, accountable</span>
                            </div>

                                                                   
                        </div>
                    </div>
                </div>
                </div>

                <AboutBox />
        </section>
    );
};

export default About;