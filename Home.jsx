import React from 'react';
import "./home.css";
import Me from "../../assets/avatar-1.svg";

import ScrollDown from './ScrollDown';


const Home = () => {
    return (
       <section className="home container" id="home">
        <div className="intro">
            <img src={Me} alt="" className="home__img" />
            <h1 className="home__nme">Srija Gubbala</h1>
            <span className="home__education">I'm a Bachelor of Technology Undergraduate</span>

            
            <a href="#contact" className="btn">Hire Me</a>

            <ScrollDown />
            
        </div>
       </section>
    )
}

export default Home