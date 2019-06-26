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
        expect(wrapper.find('Link').props('to').to).toBe('/home');
    });

    it('includes link with image', function () {
        const wrapper = mount(<MemoryRouter><Lead /></MemoryRouter>);
        console.log(wrapper.debug());
        expect(wrapper.contains(
            <div className="top-menu-lead">
                <div className="lead-link-cont">
                    <Link to="/home" id="header-link">
                        <a id="header-link" onClick={[Function: onClick]} href="/home">
                    <img src="JS-logo-2.svg" alt="jamsoon logo" id="logo" />
                  </a>
                </Link>
            </div>
            </div >
        )).toEqual(true);
    });
});