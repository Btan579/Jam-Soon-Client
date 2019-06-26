import React from 'react';
import { CurrentSearchDate } from '../CurrentSearchDate';
import { shallow } from 'enzyme';


describe('<CurrentSearchDate />', () => {
    it('Renders without crashing', () => {
        shallow(<CurrentSearchDate />);
    });

    it('Renders an error message if metro area not set first', () => {
        let dateError = "err";
        let wrapper = shallow(<CurrentSearchDate dateError={dateError} />);
        console.log(wrapper.debug());
        // expect(wrapper.contains(
        // <div className="date-search-error-cont">
        //     <h2> Please set a metro area</h2>
        //         <p>A metro area must be set before selecting a date!</p>
        //         <p>Select another date as there may be no events scheduled in the area yet</p>
        // </div>)).toEqual(true);
    });

});