import React from 'react';
import Lead from '../Lead';
import { shallow, mount } from 'enzyme';
import '../../styles/Lead.css';
import { Link, MemoryRouter, StaticRouter } from 'react-router';

describe('<Lead />', () => {
    it('Renders without crashing', () => {
        shallow(<Lead />);
    });

    it('includes link to home', function () {
        const context = { to: '/home'};
        const wrapper = mount(<StaticRouter><Lead /></StaticRouter>);
        expect(wrapper.find('Link').props('to').to).toBe('/home');
    });

});