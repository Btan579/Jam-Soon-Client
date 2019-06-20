import React from 'react';
import Item from '../Item';
import { shallow, mount } from 'enzyme';
import '../../styles/Item.css';
import { Link, MemoryRouter, StaticRouter } from 'react-router';

describe('<Item />', () => {
    it('Renders without crashing', () => {
        mount(<StaticRouter><Item /></StaticRouter>);
    });

    // it('Renders a link', function () {
    //     const wrapper = mount(<MemoryRouter><Item /></MemoryRouter>);
    //     expect(wrapper.find('Link').props('to').to).toBe(undefined);
    // });
});