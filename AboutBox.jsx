import React from 'react'

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>

                <div>
                    <h3 className="about__title">6</h3>
                    <span className="about__subtitle">Projects Completed</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-fire"></i>

                <div>
                    <h3 className="about__title">9</h3>
                    <span className="about__subtitle">Certificates</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-fire"></i>

                <div>
                    <h3 className="about__title">8</h3>
                    <span className="about__subtitle">Frameworks</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-fire"></i>

                <div>
                    <h3 className="about__title">6</h3>
                    <span className="about__subtitle">Programming Languages</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox