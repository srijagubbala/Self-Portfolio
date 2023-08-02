import React from 'react';
import "./projects.css";
import Image1 from "../../assets/service-2.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-2.svg";


const data = [
    {
        id:1,
        image: Image1,
        title: "Machine Learning model for assisting farming by weather forecasting",
        description:"This model predicts which crop should be sown by the farmer for better yield according to weather and soil conditions of that area",
        
    },
    {
        id:2,
        image: Image2,
        title: "Burglar Alarm System",
        description:"This system is designed to detect intrusion, such as unauthorized entry into a building. Software used - KEIL VISION SOFTWARE & PROTEUS 8 PROFESSIONAL  ",
        
    },
    {
        id:3,
        image: Image3,
        title: "Amazon.com Homepage Clone ",
        description:"Frontend-Development tool: Visual Studio Code || Language: HTML and CSS.",
        
    },
    {
        id:4,
        image: Image2,
        title: "Jail Security System",
        description:"Software used - KEIL VISION SOFTWARE & PROTEUS 8 PROFESSIONAL  ",
        
    },
    {
        id:5,
        image: Image2,
        title: "Stationary Vending Machine",
        description:"An automated machine that provides stationary items.",
        
    },
    {
        id:6,
        image: Image2,
        title: "Face Recognition using Digital Signal Processing",
        description:"Software used - MATHLAB",
        
    },
];

const Projects = () => {
    return (
        <section className="projects container section" id="projects">
            <h2 className="section__title">Projects</h2>

            <div className="projects__container grid">
                {data.map(({id, image, title, description}) => {
                    return (
                        <div className="projects__card" key={id}>
                            <img src={image} alt="" className="projects__img" />

                            <h3 className="projects__title">{title}</h3>
                            <p className="projects__description">{description}</p>
                      </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Projects