import React from 'react';
import LandingPage from '../LandingPage';
import { shallow } from 'enzyme';
import '../../styles/LandingPage.css';

describe('<LandingPage />', () => {
    let seedLandingSections = [];
    beforeAll(() => {
        for (let i = 0; i < 3; i++) {
            seedLists.push({
                sectionIndex: `landing-${i}`,
                heading: "heading",
                subHeading: "sub heading",
                image: "image",
                text: "After entering an area followed by a date, you will be shown a list of concerts thats happening on the selected day."
            });
        }
    });


    it('Renders without crashing', () => {
        shallow(<LandingPage />);
    });


});