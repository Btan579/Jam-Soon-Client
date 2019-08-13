import React from 'react';
import { CurrentSearchCity } from '../CurrentSearchCity';
import { shallow } from 'enzyme';
import { debug } from 'util';


describe('<CurrentSearchCity />', () => {
    it('Renders without crashing', () => {
        shallow(<CurrentSearchCity />);
    });

    it('Renders a city being searched', () => {
        const SEARCHED_CITY = "Boston/Cambridge";

        const wrapper = shallow(<CurrentSearchCity currentSearchCity={SEARCHED_CITY} />);
        jestExpect(wrapper.contains(<h3>Looking for events in: {SEARCHED_CITY}</h3>)).toEqual(true);
    });

    it('Renders default message with no city inputted', () => {
        const SEARCHED_CITY = "";

        const wrapper = shallow(<CurrentSearchCity currentSearchCity={SEARCHED_CITY} />);
        jestExpect(wrapper.contains(<h3> Search a city to set a metro area to look for events in</h3>)).toEqual(true);
    });
    it('Renders error message with invalid input', () => {
        const metroError = "err";

        const wrapper = shallow(<CurrentSearchCity metroError={metroError} />);
        jestExpect(wrapper.contains(
        <div className="metro-search-error-cont">
            <h3> Invalid city entered</h3>
                <p>Please check the proper spelling or choose the correct state and try again</p>
                <p>A proper metro area will display when a valid city is selected</p>
        </div>)).toEqual(true);
    });
});