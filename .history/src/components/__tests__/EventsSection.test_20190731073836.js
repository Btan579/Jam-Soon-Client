import React from 'react';
import '../../styles/FavoriteArtistsSection.css';
import { shallow, mount } from 'enzyme';
import {addFavoriteEvent} from '../../actions';
import { EventsSection } from "../../components/EventsSection";


describe('<EventsSection />', () => {
    const seedEventsSection = [];
    beforeAll(() => {
        for (let i = 0; i < 3; i++) {
            seedEventsSection.push({
                eventDay: `eventDay${i}`,
                eventName: `eventName${i}`,
                performingArtists: [{
                    artistName: `perfartistName${i}`,
                    artist_id: `perfartist_id${i}`,
                    billIndex: `perfbillIndex${i}`,
                    billSlot: `perfbillSlot${i}`,
                    video_id: `perfvideo_id${i}`,
                    event_id: `perfevent_id${i}`
                }],
                venueName: `venueName${i}`,
                venueLocation: `venueLocation${i}`,
                event_id: `event_id${i}`

            });
        }
    });

    it('Renders without crashing', () => {
        shallow(<EventsSection videosData={seedEventsSection}/>);

    });

    it('Renders the props', () => {
        const eventDay = seedEventsSection[0].eventDay;
        const eventName = seedEventsSection[0].eventName;
        const venueName = seedEventsSection[0].venueName;
        const venueLocation = seedEventsSection[0].venueLocation;
        const event_id = seedEventsSection[0].event_id;
        const wrapper = shallow(<EventsSection videosData={seedEventsSection} eventDay={eventDay} eventName={eventName} venueName={venueName} venueLocation={venueLocation} event_id={event_id} performingArtists={seedEventsSection}/>);
        jestExpect(wrapper.hasClass('event-section')).toBe(true);
        jestExpect(wrapper.contains(<h4>{eventName}</h4>)).toEqual(true);
        jestExpect(wrapper.contains(<h5>{venueName}</h5>)).toEqual(true);
        jestExpect(wrapper.contains(<h5>{eventDay}</h5>)).toEqual(true);
        jestExpect(wrapper.contains(<h5>{venueLocation}</h5>)).toEqual(true);
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
    
    it('Dispatches addFavoriteEvent from saveEvent', () => {
        const dispatch = jest.fn();

        const favDate = "12/22/2020";
        const favEventName = "NYE";
        const favArtists = ["potatoes","ham"];
        const favVenue = "CNY underground";
        const favVenueLocation = "New york";
        const user_id =  "82aaa";
        const event_id = seedEventsSection[0].event_id;

        const wrapper = shallow(
            <EventsSection videosData={seedEventsSection} performingArtists={seedEventsSection} favDate={favDate} favEventName={favEventName} favArtists={favArtists} favVenue={favVenue} favVenueLocation={favVenueLocation} user_id={user_id} event_id={event_id} dispatch={dispatch} />
        );

        const instance = wrapper.instance();
        
        instance.saveEvent(favDate, favEventName, favArtists, favVenue, favVenueLocation, user_id, event_id);
        jestExpect(dispatch).toHaveBeenCalled();
    });
 
});