import React from 'react';
import LandingPage from '../LandingPage';
import { shallow } from 'enzyme';
import '../../styles/LandingPage.css';

describe('<LandingPage />', () => {
    let seedLandingSections = [];
    beforeAll(() => {
        for (let i = 0; i < 3; i++) {
            seedLandingSections.push({
                sectionIndex: `landing-${i}`,
                heading: "heading",
                subHeading: "sub heading",
                image: "image",
                text: "text texty."
            });
        }
    });


    it('Renders without crashing', () => {
        shallow(<LandingPage />);
    });

    // it('Renders landing sections', () => {
    //     const wrapper = shallow(<LandingPage />);
    //     const instance = wrapper.instance();
    //     seedLandingSections.forEach(instance)
    // });

});