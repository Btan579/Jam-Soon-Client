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
        console.log(wrapper.debug());
        expect(wrapper.exists('#large-logo')).toEqual(true);
    });

});