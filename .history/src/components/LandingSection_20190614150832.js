import React from 'react';
import '../styles/LandingSection.css';

export default function LandingSection(props) {
    return (
        <section id={props.sectionIndex} className="landing"
        >
                <h3>{props.heading}</h3>
                <hr></hr>
                <h4>{props.subHeading}</h4>
                {/* <img src={props.image} alt="jamsoon landing image" className="landing-image"/> */}
                <p>{props.text}</p>
        </section>
    );
};

LandingSection.defaultProps = {
    sectionIndex: '',
    heading: '',
    subHeading: '',
    image: '',
    text: ''
};

