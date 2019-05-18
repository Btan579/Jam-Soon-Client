import { API_BASE_URL } from '../config';

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
export const fetchMetroCodeSuccess = (_id, name, playlist, artist_id, user_id ) => ({
    type: FETCH_FAVORITE_ARTISTS_SUCCESS,
    _id,
    name,
    playlist,
    artist_id,
    user_id
});

export const fetchFavoriteArtists = ( user_id ) => dispatch => {
    fetch(`${API_BASE_URL}/favartists/${user_id}`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(resdata => {
            return resdata;
        })
        .then(data => {
            console.log(data);
        });
};