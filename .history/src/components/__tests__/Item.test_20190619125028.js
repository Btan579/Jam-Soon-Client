import React from 'react';
import Item from '../Item';
import { shallow } from 'enzyme';
import '../../styles/Item.css';
import { Link } from 'react-router';

describe('<Item />', () => {
    it('Renders without crashing', () => {
        shallow(<Item />);
    });

    it('Renders the text', () => {
        const text = "Foo";
        const wrapper = shallow(<Item text={text} />);
        expect(wrapper.text()).toEqual(text);
    });

    // it('Renders the links', () => {
    //     const wrapper = shallow(<Item />);
    //     expect(wrapper.exists('#scroll-top-btn')).toEqual(true);
    // });
    // it('includes link to Mission scene', () => {
    //     const wrapper = shallow(<MemoryRouter><Home /></MemoryRouter>);
    //     expect(wrapper.find(Link).props().to).toBe('/mission');
    // });
});