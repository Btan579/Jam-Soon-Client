import React from 'react';
import Item from '../Item';
import { shallow, mount } from 'enzyme';
import '../../styles/Item.css';
import { Link, MemoryRouter } from 'react-router';

describe('<Item />', () => {
    it('Renders without crashing', () => {
        shallow(<Item />);
    });

    // the link to prop isnt set until its in the parent TopMenu

    it('Renders a link', function () {
        const wrapper = mount(<MemoryRouter><Item /></MemoryRouter>);
        expect(wrapper.find('Link').props('to').to).toBe(undefined);
    });

    it('Renders a link given a menu route', function () {
        const to = "/home";
        const wrapper = mount(<MemoryRouter><Item to={to} /></MemoryRouter>);
        expect(wrapper.find('Link').props('to').to).toBe("/home");
    });

    it('Renders  link text ', function () {
        const text = "Foo";
        const wrapper = mount(<MemoryRouter><Item text={text}/></MemoryRouter>);
        expect(wrapper.text()).toEqual(text);
    });
});