import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const ADD_FAVORITE_ARTIST = 'ADD_FAVORITE_ARTIST';
export const addFavoriteArtist = ( name, playlist, artist_id, user_id ) => ({
    type: ADD_FAVORITE_ARTIST,
    name,
    playlist,
    artist_id,
    user_id
});

export const ADD_FAVORITE_EVENT = 'ADD_FAVORITE_EVENT';
export const addFavoriteEvent = ( favEventName, favDate, favHeadliner, favSupportingArtists, favVenue, favVenueLocation, user_id, event_id ) => ({
    type: ADD_FAVORITE_EVENT,
    favEventName,
    favDate,
    favHeadliner,
    favSupportingArtists,
    favVenue,
    favVenueLocation,
    event_id,
    user_id
});

export const FETCH_FAVORITE_ARTISTS_SUCCESS = 'FETCH_FAVORITE_ARTISTS_SUCCESS';
export const fetchFavoriteArtistsSuccess = (_id, name, playlist, artist_id, user_id ) => ({
    type: FETCH_FAVORITE_ARTISTS_SUCCESS,
    _id,
    name,
    playlist,
    artist_id,
    user_id
});

export const FETCH_FAVORITE_ARTISTS_ERROR = 'FETCH_FAVORITE_ARTISTS_ERROR';
export const fetchFavoriteArtistsError = error => ({
    type: FETCH_FAVORITE_ARTISTS_ERROR,
    error
});

export const fetchFavoriteArtists = ( user_id ) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/favartists/${user_id}`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then( (data) => {
            // console.log(artists);
            let artists = data.favoriteArtists;
            console.log(artists);
            // for (let i = 0; i < artists.length; i++) {
            //     let _id = artists[i]._id;
            //     let name = artists[i].favArtistName;
            //     let playlist = artists[i].playlistUrl;
            //     let artist_id = artists[i].artist_id;
            //     let user_id = artists[i].user_id;

            //     dispatch(fetchFavoriteArtistsSuccess(_id, name, playlist, artist_id, user_id));
            // }
        })
        .catch(err => {
            dispatch(fetchFavoriteArtistsError(err));
        });
    
};