import React from 'react';
import '../../styles/FavoriteArtistsSection.css';
import { shallow, mount } from 'enzyme';
import YouTube from 'react-youtube';
import  FavoriteArtistsSection  from "../../components/FavoriteArtistsSection";


describe('<FavoriteArtistsSection />', () => {
    const seedFavArtSection = [];
    beforeAll(() => {
        for (let i = 0; i < 3; i++) {
            seedFavArtSection.push({
                artistName: `artistName${i}`,
                artist_id: `artist_id${i}`,
                billIndex: `billIndex${i}`,
                billSlot: `billSlot${i}`,
                video_id: `video_id${i}`,
                event_id: `event_id${i}`
                
            });
        }
    });

    it('Renders without crashing', () => {
        shallow(<FavoriteArtistsSection  />);

    });

    it('Renders the artistName', () => {
        const artistName = seedFavArtSection[0].artistName;
        const wrapper = shallow(<FavoriteArtistsSection artistName={artistName} />);
        jestExpect(wrapper.contains(<p>{artistName}</p>)).toEqual(true);

    });

    it('Renders youtube video', () => {
        const wrapper = shallow(<FavoriteArtistsSection />);
        jestExpect(wrapper.find('YouTube').exists()).toEqual(true);
    });

    it('Renders youtube with video id', () => {
        const video_id = seedFavArtSection[0].video_id;
        const wrapper = shallow(<FavoriteArtistsSection video_id={video_id} />);
        jestExpect(wrapper.find('YouTube').prop("videoId")).toBe(video_id);
    });
});