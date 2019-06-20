import React from 'react';
import Footer from '../Footer';
import { shallow } from 'enzyme';
import '../../styles/Footer.css';


describe('<Footer />', () => {
    it('Renders without crashing', () => {
        shallow(<Footer />);
    });

});