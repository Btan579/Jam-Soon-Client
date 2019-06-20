import React from 'react';
import Item from '../Item';
import { shallow } from 'enzyme';
import '../../styles/Item.css';
import { Link, MemoryRouter } from 'react-router';

describe('<Item />', () => {
    it('Renders without crashing', () => {
        shallow(<Item />);
    });

    it('Renders the links', () => {
        const wrapper = shallow(<MemoryRouter><Item /></MemoryRouter>);
        expect(wrapper.find(Link).props().to);
    });

    // it('includes link to specified route', () => {
    //     const to = "Foo";
    //     const wrapper = shallow(<Item /> );
    //     expect(wrapper.find(Link).props().to).toBe('/Foo');
    // });
});