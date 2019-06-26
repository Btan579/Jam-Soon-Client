import React from 'react';
import '../../styles/FavoriteArtists.css';
import { shallow, mount } from 'enzyme';
import YouTube from 'react-youtube';
import { FavoriteArtists } from "../../components/FavoriteArtists";
import { deleteFavoriteArtist } from '../../actions/favorites';

const mockdeleteFavoriteArtistdAction = {
    type: 'DELETE_FAVORITE_ARTIST'
};
jest.mock('../../actions/favorites', () => Object.assign({},
    require.requireActual('../../actions/favorites'),
    {
        deleteFavoriteArtist: jest.fn().mockImplementation(() => {
            return mockdeleteFavoriteArtistdAction;
        })
    }
));

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
        const wrapper = shallow(<FavoriteArtists video_id={video_id} />);
        expect(wrapper.find('YouTube').prop("videoId")).toBe(video_id);
    });

    it('Renders favorite artist div with data attributes', () => {
        const currentUser_id = "btan8887"
        const artist_id = seedFavArtists[0].video_id;
        const _id = seedFavArtists[0]._id;
        const wrapper = shallow(<FavoriteArtists currentUser_id={currentUser_id} artist_id={artist_id} _id={_id} />);
        expect(wrapper.find('.favorite-artist').prop("data-user")).toBe(currentUser_id);
        expect(wrapper.find('.favorite-artist').prop("data-artist_id")).toBe(artist_id);
        expect(wrapper.find('.favorite-artist').prop("data_id")).toBe(_id);
    });

    it('Dispatches deleteFavoriteArtist from deleteFavoriteArtist', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(
            <FavoriteArtists  dispatch={dispatch} />
        );
        const instance = wrapper.instance();
        const _id = seedFavArtists[0]._id;
        instance.deleteFavoriteArtist(_id);
        expect(dispatch).toHaveBeenCalledWith(mockdeleteFavoriteArtistdAction);
    });


    it('Should fire the deleteFavoriteArtist callback when delete favorite artist button is clicked', () => {
        // const mockdeleteFavoriteArtist = jest.fn();
        const callback = jest.fn();
        const wrapper = mount(<FavoriteArtists deleteFavoriteArtist={callback} />);
        // console.log(wrapper.debug());
        wrapper.find('.fav-artist-delete-btn').simulate('click');
        expect(callback).toHaveBeenCalled();
    });

    // it('Dispatches deleteFavoriteArtist when delete is clicked', () => {
    //     const dispatch = jest.fn();
    //     const wrapper = shallow(
    //         <FavoriteArtists dispatch={dispatch} />
    //     );
    //     const _id = seedFavArtists[0]._id;
    //     wrapper.find('.fav-artist-delete-btn').simulate('click');
      
    //     expect(dispatch).toHaveBeenCalledWith(deleteFavoriteArtist(_id));
    // });


});