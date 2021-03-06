import React from 'react';
import '../styles/LandingSection.css';

export default function LandingSection(props) {
    return (
        <div id="landing-section" >
            
                <h3>{props.heading}</h3>
                <h4>{props.subHeading}</h4>
                <p>{props.image}</p>
                <p>{props.text}</p>
            
        </div>
    );
};

LandingSection.defaultProps = {
    heading: '',
    subHeading: '',
    image: '',
    text: ''
};

