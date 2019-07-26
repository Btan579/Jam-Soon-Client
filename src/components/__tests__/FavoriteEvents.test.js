import React from 'react';
import '../../styles/FavoriteEvents.css';
import { shallow, mount } from 'enzyme';
import YouTube from 'react-youtube';
import { FavoriteEvents } from "../../components/FavoriteEvents";

import { should } from 'chai';
// import chai from 'chai';
// import chaiEnzyme from 'chai-enzyme';


describe('<FavoriteEvents />', () => {
    const seedFavEvents = [];
    beforeAll(() => {
        for (let i = 0; i < 3; i++) {
            seedFavEvents.push({
                favEventName: `favEventName${i}`,
                favDate: `favDate${i}`,
                favArtists: [`favArtist${i}`],
                favVenue: `favVenue${i}`,
                favVenueLocation: `favVenueLocation${i}`,
                _id: `favEventId${i}`,
                event_id: `event_id${i}`,
                favArtists: [{
                    artistName: `artistName${i}`,
                    artist_id: `artist_id${i}`,
                    billIndex: `billIndex${i}`,
                    billSlot: `billSlot${i}`,
                    video_id: `video_id${i}`,
                    event_id: `event_id${i}`
                }]
            });
        }
    });

    it('Renders without crashing', () => {
        shallow(<FavoriteEvents favoriteEvents={seedFavEvents}/>);
        
    });

    it('Renders -fav-event-cont container', () => {
        const wrapper = shallow(<FavoriteEvents favoriteEvents={seedFavEvents} />);
        should(wrapper.hasClass('-fav-event-cont')).equal(true);
    });

    // it('Renders favorite-event children', () => {
    //     const currentUser_id = "btan8887"
    //     const wrapper = mount(<FavoriteEvents favoriteEvents={seedFavEvents} currentUser_id={currentUser_id} />);
    //     expect(wrapper.find('.favorite-event')).to.have.lengthOf(3);
    //     // expect(wrapper.find('.favorite-event'));
    //     // console.log(wrapper.find('.favorite-event').debug());
     
    // });

    // it('Renders favorite artists', () => {
    //     const currentUser_id = "btan8887"
    //     const wrapper = mount(<FavoriteEvents favoriteEvents={seedFavEvents} currentUser_id={currentUser_id} />);
    //     expect(wrapper.find('FavoriteArtistsSection')).to.have.lengthOf(3);
    //     // expect(wrapper.find('.favorite-event'));
    //     // console.log(wrapper.find('.favorite-event').debug());

    // });

    // it('Renders delete fav event button', () => {
    //     const wrapper = shallow(<FavoriteEvents favoriteEvents={seedFavEvents} />);
    //     expect(wrapper.find('.fav-event-delete-btn')).to.have.lengthOf(3);
       
    // });

    // it('Should fire the deleteArtist callback when delete favorite artist button is clicked', () => {
    //     const callback = chai.spy();
    //     const wrapper = mount(<FavoriteEvents favoriteEvents={seedFavEvents} onclickDeleteEvent={callback} />);
    //     wrapper.find('.fav-event-delete-btn').first().simulate('click');
    //     expect(callback).to.have.been.called();
    // });

});