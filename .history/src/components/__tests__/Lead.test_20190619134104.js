import React from 'react';
import Lead from '../Lead';
import { shallow } from 'enzyme';
import '../../styles/Lead.css';
import { Link, MemoryRouter } from 'react-router';

describe('<Lead />', () => {
    it('Renders without crashing', () => {
        shallow(<Lead />);
    });

    it('includes link to home', function () {
        const wrapper = shallow(<MemoryRouter><Lead /></MemoryRouter>);
        expect(wrapper.find('Link').prop('to')).to.be.equal('/home');
    });

});