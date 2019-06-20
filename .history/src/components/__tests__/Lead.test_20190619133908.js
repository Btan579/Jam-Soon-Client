import React from 'react';
import Lead from '../Lead';
import { shallow } from 'enzyme';
import '../../styles/Lead.css';

describe('<Lead />', () => {
    it('Renders without crashing', () => {
        shallow(<Lead />);
    });
});