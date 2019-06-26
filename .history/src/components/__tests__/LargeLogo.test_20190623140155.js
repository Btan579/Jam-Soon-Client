import React from 'react';
import LargeLogo from '../LargeLogo';
import { shallow } from 'enzyme';
import "../../styles/LargeLogo.css";
import logoLarge from "../../images/JS-logo-2.svg";

describe('<LargeLogo />', () => {
    it('Renders without crashing', () => {
        shallow(<LargeLogo />);
    });

    it('Renders large logo image', () => {
        const wrapper = shallow(<LargeLogo />);

        expect(wrapper.contains(
            <div className="large-logo">
                <img src={logoLarge} alt="jamsoon logolarge" id="large-logo" />
                <h1>Jam Soon</h1>
                <h2>listen locally</h2>
                <hr></hr>
            </div>)).toEqual(true);
    });
});