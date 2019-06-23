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
        expect(wrapper.contains(<h3>Looking for events in: {SEARCHED_CITY}</h3>)).toEqual(true);
    });

    it('Renders default message with no city inputted', () => {
        let SEARCHED_CITY = "";

        let wrapper = shallow(<CurrentSearchCity currentSearchCity={SEARCHED_CITY} />);
        expect(wrapper.contains(<h3> Search a city to set a metro area to look for events in</h3>)).toEqual(true);
    });
    it('Renders error message with invalid input', () => {
        let metroError = "err";

        let wrapper = shallow(<CurrentSearchCity metroError={metroError} />);
        expect(wrapper.contains(
        <div className="metro-search-error-cont">
            <h3> Invalid city entered</h3>
                <p>Please check the proper spelling or choose the correct state and try again</p>
                <p>A proper metro area will display when a valid city is selected</p>
        </div>)).toEqual(true);
    });
});