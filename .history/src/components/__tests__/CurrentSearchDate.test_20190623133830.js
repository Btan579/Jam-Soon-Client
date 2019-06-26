import React from 'react';
import { CurrentSearchDate } from '../CurrentSearchDate';
import { shallow } from 'enzyme';


describe('<CurrentSearchDate />', () => {
    it('Renders without crashing', () => {
        shallow(<CurrentSearchDate />);
    });

    it('Renders an error message if metro area not set first', () => {
        let dateError = false;
        let wrapper = shallow(<CurrentSearchDate dateError={dateError} />);
        
        expect(wrapper.contains(
        <div className="date-search-error-cont">
            <h2> Please set a metro area</h2>
                <p>A metro area must be set before selecting a date!</p>
                <p>Select another date as there may be no events scheduled in the area yet</p>
        </div>)).toEqual(true);
    });
    console.log(wrapper.debug());

    it('Renders default header with no input', () => {
        let metroCode = "";
        let currentSearchDate = "";
        let wrapper = shallow(<CurrentSearchDate metroCode={metroCode} currentSearchDate={currentSearchDate} />);

        expect(wrapper.contains(<h3> Select a date </h3>)).toEqual(true);
    });


    it('Renders header with date after date inputted', () => {
        let currentSearchDate = "October 31st 2099";
        let wrapper = shallow(<CurrentSearchDate currentSearchDate={currentSearchDate} />);
        console.log(wrapper.debug());
        // expect(wrapper.contains(<h3> Events for: {currentSearchDate} </h3>)).toEqual(true);
    });
});