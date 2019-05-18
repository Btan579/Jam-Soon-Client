import React from 'react';
// import {landingSections}  from './ComponentData';
import '../styles/Performance.css';

export default function Performance(props) {
    return (
        <section className="landing-section">
            <h3>{props.heading}</h3>
            <h4>{props.subHeading}</h4>
            <p>{props.image}</p>
            <p>{props.text}</p>
        </section>
    );
};

LandingSection.defaultProps = {
    heading: '',
    subHeading: '',
    image: '',
    text: ''
};

