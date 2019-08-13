import React from 'react';
import '../../styles/PerformerSection.css';
import { shallow, mount } from 'enzyme';
import { addFavoriteArtist } from '../../actions';
import { PerformerSection } from "../../components/PerformerSection";

describe('<PerformerSection />', () => {
    const seedPerformerSection = [];
    beforeAll(() => {
        for (let i = 0; i < 3; i++) {
            seedPerformerSection.push({
                    artistName: `perfartistName${i}`,
                    artist_id: `perfartist_id${i}`,
                    billIndex: `perfbillIndex${i}`,
                    billSlot: `perfbillSlot${i}`,
                    video_id: `perfvideo_id${i}`,
                    event_id: `perfevent_id${i}`
            });
        }
    });

    it('Renders without crashing', () => {
        shallow(<PerformerSection />);

    });

    it('Renders the props', () => {
        const artistName = seedPerformerSection[0].artistName;
        const billIndex = seedPerformerSection[0].billIndex;
        const video_id = seedPerformerSection[0].video_id;
        const event_id = seedPerformerSection[0].event_id;
        const billSlot = seedPerformerSection[0].billSlot;
        const artist_id = seedPerformerSection[0].artist_id;

        const wrapper = shallow(<PerformerSection data-event_id={event_id} data-artist_id={artist_id} data-billindex={billIndex} data-billslot={billSlot} artistName={artistName} />);
        
        console.log(wrapper.debug());
        // jestExpect(wrapper.find('.performer-section').prop("data-event_id")).toBe(event_id);
        // jestExpect(wrapper.hasClass('performer-section')).toBe(true);
        // jestExpect(wrapper.contains(<h4>{eventName}</h4>)).toEqual(true);
        // jestExpect(wrapper.contains(<h5>{venueName}</h5>)).toEqual(true);
        // jestExpect(wrapper.contains(<h5>{eventDay}</h5>)).toEqual(true);
        // jestExpect(wrapper.contains(<h5>{venueLocation}</h5>)).toEqual(true);
    });

    // it('Renders the performers', () => {
    //     const performingArtists = seedEventsSection[0].performingArtists;
    //     // const perfs = wrapper.find('PerfomerSection');
    //     const wrapper = mount(<EventsSection videosData={seedEventsSection} performingArtists={performingArtists} />);
    //     console.log(wrapper.debug());
    // });

    // it('Should fire the saveEvent callback when favorite-event-btn button is clicked', () => {
    //     const performingArtists = seedEventsSection[0].performingArtists;
    //     const callback = jest.fn();
    //     const wrapper = mount(<EventsSection videosData={seedEventsSection} performingArtists={performingArtists} saveEvent={callback} />);
    //     console.log(wrapper.debug());
    //     wrapper.find('.favorite-event-btn').first().simulate('click');
    //     jestExpect(callback).toHaveBeenCalled();
    // });

    // it('Dispatches addFavoriteEvent from saveEvent', () => {
    //     const dispatch = jest.fn();

    //     const favDate = "12/22/2020";
    //     const favEventName = "NYE";
    //     const favArtists = ["potatoes", "ham"];
    //     const favVenue = "CNY underground";
    //     const favVenueLocation = "New york";
    //     const user_id = "82aaa";
    //     const event_id = seedEventsSection[0].event_id;

    //     const wrapper = shallow(
    //         <EventsSection videosData={seedEventsSection} performingArtists={seedEventsSection} favDate={favDate} favEventName={favEventName} favArtists={favArtists} favVenue={favVenue} favVenueLocation={favVenueLocation} user_id={user_id} event_id={event_id} dispatch={dispatch} />
    //     );

    //     const instance = wrapper.instance();

    //     instance.saveEvent(favDate, favEventName, favArtists, favVenue, favVenueLocation, user_id, event_id);
    //     jestExpect(dispatch).toHaveBeenCalled();
    // });

});