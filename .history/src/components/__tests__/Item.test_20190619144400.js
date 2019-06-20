import React from 'react';
import Item from '../Item';
import { shallow, mount } from 'enzyme';
import '../../styles/Item.css';
import { Link, MemoryRouter, StaticRouter } from 'react-router';

describe('<Item />', () => {
    it('Renders without crashing', () => {
        shallow(<Item />);
    });

    it('Renders a link', function () {
        const wrapper = shallow(<MemoryRouter><Item /></MemoryRouter>);
        console.log(wrapper.find('Link'));
        expect(wrapper.find('Link').props('to').to).toBe(undefined);
    });
});