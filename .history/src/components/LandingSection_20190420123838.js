import React from 'react';
import {landingSections} from './ComponentData';
import '../styles/LandingSection.css';

export default class LandingSection extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         landingSections: [{
    //             text: 'Example card 1'
    //         }, {
    //             text: 'Example card 2'
    //         }, {
    //             text: 'Example card 3'
    //         }]
    //     }
    // }
    render() {
        const displayLandingSections = landingSections.map((section, index) => (
            <LandingSection
                key={index}
                heading={section.heading}
                subheading={section.subHeading}
                image={section.image}
                text={section.text}
            />
        ));
         return (
            <section className="landing-section">
                 <h3>{displayLandingSections.heading}</h3>
                 <h4>{displayLandingSections.subHeading}</h4>
                 <p>{displayLandingSectionsps.image}</p>
                 <p>{displayLandingSections.text}</p>
            </section>
        );
    }
}

// export default function LandingSection() {
//     const displayLandingSections = landingSections.map((section, index) => (
//         <LandingSection
//             key={index}
//             heading={section.heading}
//             subheading={section.subHeading}
//             image={section.image}
//             text={section.text}
//         />
//     ));
//     return (
//         <section className="landing-section">
//             <h3>{props.heading}</h3>
//             <h4>{props.subHeading}</h4>
//             <p>{props.image}</p>
//             <p>{props.text}</p>
//         </section>
//     );
// };

LandingSection.defaultProps = {
    heading: '',
    subHeading: '',
    image: '',
    text: ''
};

