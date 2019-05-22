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
            artists.forEach(function (artist)   {
                let _id = artist._id;
                let name = artist.favArtistName;
                let playlist = artist.playlistUrl;
                let artist_id = artist.artist_id;
                let user_id = artist.user_id;
                dispatch(fetchFavoriteArtistsSuccess(_id, name, playlist, artist_id, user_id));
            });
        })
        .catch(err => {
            dispatch(fetchFavoriteArtistsError(err));
        });
};

export const FETCH_FAVORITE_EVENTS_SUCCESS = 'FETCH_FAVORITE_EVENTS_SUCCESS';
export const fetchFavoriteEventsSuccess = (_id, favEventName, favDate, favHeadliner, favSupportingArtists, favVenue, favVenueLocation, user_id, event_id ) => ({
    type: FETCH_FAVORITE_EVENTS_SUCCESS,
    _id,
    favEventName,
    favDate,
    favHeadliner,
    favSupportingArtists,
    favVenue,
    favVenueLocation,
    event_id,
    user_id
});

export const FETCH_FAVORITE_EVENTS_ERROR = 'FETCH_FAVORITE_EVENTS_ERROR';
export const fetchFavoriteEventsError = error => ({
    type: FETCH_FAVORITE_EVENTS_ERROR,
    error
});

export const fetchFavoriteEvents = (user_id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/favevents/${user_id}`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => {
            // console.log(artists);
            let events = data.favoriteEvents;
            console.log(events);
            events.forEach(function (evnt) {
                let _id = evnt._id;
                let favEventName = evnt.favEventName;
                let favDate = evnt.favDate;
                let favHeadliner = evnt.favHeadliner;
                let favSupportingArtists = evnt.favSupportingArtists;
                let favVenue = evnt.favVenue;
                let favVenueLocation = evnt.favVenueLocation;
                let event_id = evnt.event_id;
                let user_id = evnt.user_id;
                dispatch(fetchFavoriteEventsSuccess(_id, favEventName, favDate, favHeadliner, favSupportingArtists, favVenue, favVenueLocation, user_id, event_id));
            });
        })
        .catch(err => {
            dispatch(fetchFavoriteArtistsError(err));
        });
};