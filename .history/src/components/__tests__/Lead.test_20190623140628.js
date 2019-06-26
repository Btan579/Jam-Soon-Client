import React from 'react';
import Lead from '../Lead';
import { shallow, mount } from 'enzyme';
import '../../styles/Lead.css';
import { Link, MemoryRouter } from 'react-router';
import { debug } from 'util';

describe('<Lead />', () => {
    it('Renders without crashing', () => {
        shallow(<Lead />);
    });

    it('includes link to home', function () {
        const wrapper = mount(<MemoryRouter><Lead /></MemoryRouter>);
        console.log(wrapper.debug());
        expect(wrapper.find('Link').props('to').to).toBe('/home');
    });

});