import React from 'react';
import LandingPage from '../LandingPage';
import { shallow } from 'enzyme';

describe('<LandingPage />', () => {
    it('Renders without crashing', () => {
        shallow(<LandingPage />);
    });

    
});