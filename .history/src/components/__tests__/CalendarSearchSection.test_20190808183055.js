import React from 'react';
import '../../styles/CalendarSearchSection.css';
import { shallow, mount } from 'enzyme';
import { CalendarSearchSection } from "../../components/CalendarSearchSection";

describe('<CalendarSearchSection />', () => {
    // const seedFavArtists = [];
    // beforeAll(() => {
    //     for (let i = 0; i < 10; i++) {
    //         seedFavArtists.push({
    //             _id: `favArtistId${i}`,
    //             favArtistName: `favArtistName${i}`,
    //             video_id: `video_id${i}`,
    //             _id: `_id${i}`,
    //             artist_id: `arist_id${i}`
    //         });
    //     }
    // });

    it('Renders without crashing', () => {
        shallow(<CalendarSearchSection  />);
    });

    // it('Renders the props', () => {
    //     const wrapper = shallow(<CalendarSearchSection />);
    //     console.log(wrapper.debug());
    // });

    it('Renders DatePicker', () => {
        const wrapper = shallow(<CalendarSearchSection />);
        console.log(wrapper.debug());
        jestExpect(wrapper.find('DatePicker').exists()).toEqual(true);
    });

    it('Dispatches setSearchDate from onSelect', () => {
        const dispatch = jest.fn();

        const clientDate = "5/5/2019";

        const wrapper = shallow(
            <PerformerSection clientDate={clientDate} dispatch={dispatch} />
        );

        const instance = wrapper.instance();

        instance.saveArtist(favArtistName, videoUrl, user_id, artist_id);
        jestExpect(dispatch).toHaveBeenCalled();
    });
});