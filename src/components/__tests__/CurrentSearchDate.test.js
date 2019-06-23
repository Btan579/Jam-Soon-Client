import React from 'react';
import CurrentSearchDate from '../CurrentSearchDate';
import { shallow } from 'enzyme';


describe('<CurrentSearchDate />', () => {
    it('Renders without crashing', () => {
        shallow(<CurrentSearchDate />);
    });

});