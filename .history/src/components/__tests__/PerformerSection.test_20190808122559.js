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

        const wrapper = shallow(<PerformerSection event_id={event_id} artist_id={artist_id} billIndex={billIndex} billSlot={billSlot} artistName={artistName} />);

        // console.log(wrapper.debug());
        jestExpect(wrapper.find('.performer-section').prop("data-event_id")).toBe(event_id);
        jestExpect(wrapper.find('.performer-section').prop("data-artist_id")).toBe(artist_id);
        jestExpect(wrapper.find('.performer-section').prop("data-billindex")).toBe(billIndex);
        jestExpect(wrapper.find('.performer-section').prop("data-billslot")).toBe(billSlot);
        jestExpect(wrapper.contains(<h5>{artistName}</h5>)).toEqual(true);

    });

    it('Renders youtube video', () => {
        const wrapper = shallow(<PerformerSection />);
        jestExpect(wrapper.find('YouTube').exists()).toEqual(true);
    });

    it('Renders youtube with artist id', () => {
        const video_id = seedPerformerSection[1].video_id;
        const wrapper = shallow(<PerformerSection video_id={video_id} />);
        jestExpect(wrapper.find('YouTube').prop("videoId")).toBe(video_id);
    });


    // it('Should fire the saveEvent callback when favorite-event-btn button is clicked', () => {
    //     const performingArtists = seedEventsSection[0].performingArtists;
    //     const callback = jest.fn();
    //     const wrapper = mount(<EventsSection videosData={seedEventsSection} performingArtists={performingArtists} saveEvent={callback} />);
    //     i <
    //     wrapper.find('.favorite-event-btn').first().simulate('click');
    //     jestExpect(callback).toHaveBeenCalled();
    // });

    it('Dispatches addFavoriteArtist from saveArtist', () => {
        const dispatch = jest.fn();

        const favArtistName = "Jamman"
        const videoUrl = "www.pod.net"
        const artist_id = "22yomama"
        const user_id = "87aaa";

        const wrapper = shallow(
            <PerformerSection user_id={user_id} artist_id={artist_id} favArtistName={favArtistName} videoUrl={videoUrl} dispatch={dispatch} />
        );

        const instance = wrapper.instance();

        instance.saveArtist(favArtistName, videoUrl, user_id, artist_id);
        jestExpect(dispatch).toHaveBeenCalled();
    });

});