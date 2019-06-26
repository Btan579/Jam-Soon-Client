import React from 'react';
import '../../styles/FavoriteArtists.css';
import { shallow, mount } from 'enzyme';
import YouTube from 'react-youtube';
import {FavoriteArtists} from "../../components/FavoriteArtists";
import { deleteFavoriteArtist } from '../../actions/favorites';

describe('<FavoriteArtists />', () => {
    const seedFavArtists = [];
    beforeAll(() => {
        for (let i = 0; i < 10; i++) {
            seedFavArtists.push({
                _id: `favArtistId${i}`,
                favArtistName: `favArtistName${i}`,
                video_id: `video_id${i}`,
                _id: `_id${i}`,
                artist_id: `arist_id${i}`
            });
        }
    });

    it('Renders without crashing', () => {
        shallow(<FavoriteArtists currentUser_id={""} />);
    });

    it('Renders favorite artist name', () => {
        const favArtistName = "Elton John";
        const wrapper = shallow(<FavoriteArtists favArtistName={favArtistName} />);
        expect(wrapper.contains(<h4>{favArtistName}</h4>)).toEqual(true);
    });

    it('Renders fav artist hr', () => {
        const wrapper = shallow(<FavoriteArtists />);
        expect(wrapper.contains(<hr className="fav-artist-hr"></hr>)).toEqual(true);
    });

    it('Renders favorite-artist container', () => {
        const wrapper = shallow(<FavoriteArtists />);
        expect(wrapper.hasClass('favorite-artist')).toEqual(true);
    });

    it('Renders delete fav artist button', () => {
        const wrapper = shallow(<FavoriteArtists />);
        expect(wrapper.find('button').hasClass('fav-artist-delete-btn')).toEqual(true);
    });

    it('Renders youtube video', () => {
        const wrapper = shallow(<FavoriteArtists />);
        expect(wrapper.find('YouTube').exists()).toEqual(true);
    });

    it('Renders youtube with artist id', () => {
        const video_id = seedFavArtists[0].video_id;
        const wrapper = shallow(<FavoriteArtists video_id={video_id}/>);
        
        console.log(wrapper.debug());
        // console.log(wrapper.children('.favorite-artist').debug());
        // // expect(wrapper.children('favorite-artist')).toEqual(true);
    });
    // it('Dispatches deleteFavoriteArtist from deleteFavoriteArtist', () => {
    //     const dispatch = jest.fn();
        
    //     const wrapper = mount(
    //         <FavoriteArtists dispatch={dispatch} />
    //     );
    //     // const _id = 'id88182';
    //     // const instance = wrapper.instance();
    //     console.log(wrapper.debug());
    //     // instance.deleteFavoriteArtist(_id);
    //     // expect(dispatch).toHaveBeenCalledWith(deleteFavoriteArtist(_id));
    // });

    // it('Dispatches deleteFavoriteArtist when delete is clicked', () => {
    //     const dispatch = jest.fn();
    //     const wrapper = mount(
    //         <FavoriteArtists dispatch={dispatch} />
    //     );
    //     const _id = seedFavArtists[0]._id;
    //     wrapper.find('.favorite-artist[data_id="number"]').instance().value = value;
    //     instance.deleteFavoriteArtist(_id);
    //     expect(dispanpmtch).toHaveBeenCalledWith(deleteFavoriteArtist(_id));
    // });


});