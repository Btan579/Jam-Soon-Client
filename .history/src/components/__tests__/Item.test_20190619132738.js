import React from 'react';
import Item from '../Item';
import { shallow } from 'enzyme';
import '../../styles/Item.css';
import { Link, MemoryRouter } from 'react-router';

describe('<Item />', () => {
    it('Renders without crashing', () => {
        shallow(<Item />);
    });

    it('Renders the text', () => {
        const text = 'foo';
        const wrapper = shallow(<Item text={text} />);
        expect(wrapper.text()).toEqual(text);
    });

    // it('includes link to specified route', () => {
    //     const to = "Foo";
    //     const wrapper = shallow(<Item /> );
    //     expect(wrapper.find(Link).props().to).toBe('/Foo');
    // });
});