import React from 'react';
import { CurrentSearchCity } from '../CurrentSearchCity';
import { shallow } from 'enzyme';
import { debug } from 'util';


describe('<CurrentSearchCity />', () => {
    it('Renders without crashing', () => {
        shallow(<CurrentSearchCity />);
    });

    it('Renders a city being searched', () => {
        let SEARCHED_CITY = "Boston/Cambridge";

        let wrapper = shallow(<CurrentSearchCity currentSearchCity={SEARCHED_CITY} />);
        console.log(wrapper.debug());
    });
});