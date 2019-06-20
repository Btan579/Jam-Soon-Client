import React from 'react';
import Item from '../Item';
import { shallow } from 'enzyme';
import '../../styles/Item.css';

describe('<Item />', () => {
    it('Renders without crashing', () => {
        shallow(<Item />);
    });
});