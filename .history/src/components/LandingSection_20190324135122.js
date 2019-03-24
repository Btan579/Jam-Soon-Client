import React from 'react';

import '../styles/LandingSection.css';

export default class LandingSection extends React.Component {
    render() {
         return (
            <section className="landing-section">
                <h3>{heading}</h3>
                <h4>{subHeading}</h4>
                <p>{image}</p>
                <p>{text}</p>
            </section>
        );
    }
}
