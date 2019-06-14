import React from 'react';
import LandingPage from '../LandingPage';
import { shallow } from 'enzyme';
import '.../styles/LandingPage.css';

describe('<LandingPage />', () => {
    it('Renders without crashing', () => {
        shallow(<LandingPage />);
    });


});