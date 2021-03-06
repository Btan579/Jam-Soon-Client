import React from 'react';
import Lead from '../Lead';
import { shallow, mount } from 'enzyme';
import '../../styles/Lead.css';
import { Link, MemoryRouter } from 'react-router';
import logo from "../../images/JS-logo-2.svg";

describe('<Lead />', () => {
    it('Renders without crashing', () => {
        shallow(<Lead />);
    });

    it('includes link to home', function () {
        const wrapper = mount(<MemoryRouter><Lead /></MemoryRouter>);
        jestExpect(wrapper.find('Link').props('to').to).toBe('/home');
    });

    it('includes link with image', function () {
        const wrapper = shallow(<Lead />);
        jestExpect(wrapper.find('img').prop("src")).toBe(logo);
    });
});