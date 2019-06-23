import React from 'react';
import CurrentSearchCity from '../CurrentSearchCity';
import { shallow } from 'enzyme';


describe('<CurrentSearchCity />', () => {
    it('Renders without crashing', () => {
        shallow(<CurrentSearchCity />);
    });

});