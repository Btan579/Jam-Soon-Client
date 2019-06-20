import React from 'react';
import LandingSection from '../LandingSection';
import { shallow } from 'enzyme';
import '../../styles/LandingSection.css';


describe('<LandingSection />', () => {
    it('Renders without crashing', () => {
        shallow(<LandingSection />);
    });

    it('Renders the heading', () => {
        const heading = "Welcome";
        const wrapper = shallow(<LandingSection heading={heading} />);
        expect(wrapper.contains(<h3>{heading}</h3>)).toEqual(true);
    });

    it('Renders the sub heading', () => {
        const subHeading = "not welcome";
        const wrapper = shallow(<LandingSection subHeading={subHeading} />);
        expect(wrapper.contains(<h4>{subHeading}</h4>)).toEqual(true);
    });
    it('Renders the text', () => {
        const text = "something is written here";
        const wrapper = shallow(<LandingSection text={text} />);
        expect(wrapper.contains(<p>{text}</p>)).toEqual(true);
    });

    it('Renders the image', () => {
        const image = "picture";
        const wrapper = shallow(<LandingSection image={image} />);
        expect(wrapper.contains(<img src={image} alt="jamsoon landing" className="landing-image"/>)).toEqual(true);
    });

    it('Renders the sectionIndex', () => {
        const sectionIndex = "sectionIndex-1";
        const image = "picture";
        const text = "something is written here";
        const heading = "Welcome";
        const subHeading = "not welcome";
        const wrapper = shallow(<LandingSection sectionIndex={sectionIndex} heading={heading} subHeading={subHeading} text={text} image={image}/>);
        console.log(wrapper.debug());
        expect(wrapper.contains(<section id={sectionIndex} className="landing">
            <h3>{heading}</h3>
            <h4>{subHeading}</h4>
            <img src={image} alt="jamsoon landing" className="landing-image" />
            <p>{text}</p>
        </section>)).toEqual(true);
    });
});