import React from 'react';
import StateDropDown from '../StateDropDown';
import { shallow } from 'enzyme';
import '../../styles/StateDropDown.css';

describe('<StateDropDown />', () => {
    it('Renders without crashing', () => {
        shallow(<StateDropDown />);
    });

    it('Renders the state name', () => {
        const stateName = "Masachubits";
        const wrapper = shallow(<StateDropDown stateName={stateName} />);
        expect(wrapper.stateName()).toEqual(stateName);
    });

    it('Renders the state short code', () => {
        const stateShortCode = "CA";
        const wrapper = shallow(<StateDropDown stateShortCode={stateShortCode} />);
        expect(wrapper.stateShortCode()).toEqual(stateShortCode);
    });
});