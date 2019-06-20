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

    it('Renders  link text ', function () {
        const text = "Foo";
        const wrapper = shallow(<Item text={text}/>);
        expect(wrapper.text()).toEqual(text);
    });
});