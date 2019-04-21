import React from 'react';
import {landingSections}  from './ComponentData';
import '../styles/LandingSection.css';

export default class LandingSection extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { landingSections };
    // }
    render() {
        const landingSections = landingSections.map((section, index) => (
            <LandingSection
                key={index}
                heading={landingSections.heading}
                subheading={landingSections.subHeading}
                image={landingSections.image}
                text={landingSections.text}
            />
        ));
         return (
            <section className="landing-section">
                 <h3>{sections.heading}</h3>
                 <h4>{sections.subHeading}</h4>
                 <p>{sections.image}</p>
                 <p>{sections.text}</p>
            </section>
        );
    }
}

// export default function LandingSection(props) {
//     return (
//         <section className="landing-section">
//             <h3>{props.heading}</h3>
//             <h4>{props.subHeading}</h4>
//             <p>{props.image}</p>
//             <p>{props.text}</p>
//         </section>
//     );
// };

// LandingSection.defaultProps = {
//     heading: '',
//     subHeading: '',
//     image: '',
//     text: ''
// };

