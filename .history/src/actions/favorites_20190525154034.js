import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const ADD_FAVORITE_EVENT_SUCCESS = 'ADD_FAVORITE_EVENT_SUCCESS';
export const addFavoriteEventSuccess = (favEventName, favDate, favHeadliner, favSupportingArtists, favVenue, favVenueLocation, event_id, user_id, _id) => ({
    type: ADD_FAVORITE_EVENT_SUCCESS,
    favEventName,
    favDate,
    favHeadliner,
    favSupportingArtists,
    favVenue,
    favVenueLocation,
    event_id,
    user_id,
    _id
});

export const ADD_FAVORITE_EVENT_ERROR = 'ADD_FAVORITE_EVENT_ERROR';
export const addFavoriteEventError = error => ({
    type: ADD_FAVORITE_EVENT_ERROR,
    error
});

export const addFavoriteEvent = (user_id, favEventName, favDate, favHeadliner, favSupportingArtists, favVenue, favVenueLocation, event_id) => (dispatch, getState) => {
    console.log(favEventName, user_id, favDate, favHeadliner, favSupportingArtists, favVenue, favVenueLocation, event_id);
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/favevents/`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            favEventName, favDate, favHeadliner, favSupportingArtists, favVenue, favVenueLocation, event_id, user_id
        })
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => {
            let event = data;
            let _id = event._id;
            let favEventName = event.favEventName;
            let favDate = event.favDate;
            let favHeadliner = event.favHeadliner;
            let favSupportingArtists = event.favSupportingArtists;
            let favVenue = event.favVenue;
            let favVenueLocation = event.favVenueLocation;
            let event_id = event.event_id;
            let user_id = event.user_id;
            dispatch(addFavoriteEventSuccess(_id, favEventName, favDate, favHeadliner, favSupportingArtists, favVenue, favVenueLocation, event_id, user_id));
        })
        .catch(err => {
            dispatch(addFavoriteEventError(err));
        });
};

export const FETCH_FAVORITE_ARTISTS_SUCCESS = 'FETCH_FAVORITE_ARTISTS_SUCCESS';
export const fetchFavoriteArtistsSuccess = (_id, favArtistName, video_id, artist_id, user_id ) => ({
    type: FETCH_FAVORITE_ARTISTS_SUCCESS,
    _id,
    favArtistName,
    video_id,
    artist_id,
    user_id
});

export const FETCH_FAVORITE_ARTISTS_ERROR = 'FETCH_FAVORITE_ARTISTS_ERROR';
export const fetchFavoriteArtistsError = error => ({
    type: FETCH_FAVORITE_ARTISTS_ERROR,
    error
});

export const ADD_FAVORITE_ARTIST_SUCCESS = 'ADD_FAVORITE_ARTIST_SUCCESS';
export const addFavoriteArtistSuccess = (favArtistName, video_id, artist_id, user_id, _id) => ({
    type: ADD_FAVORITE_ARTIST_SUCCESS,
    favArtistName,
    video_id,
    artist_id,
    user_id,
    _id
});

export const ADD_FAVORITE_ARTIST_ERROR = 'ADD_FAVORITE_ARTIST_ERROR';
export const addFavoriteArtistError = error => ({
    type: ADD_FAVORITE_ARTIST_ERROR,
    error
});



export const addFavoriteArtist = (favArtistName, video_id, artist_id, user_id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/favartists/`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            favArtistName,
            video_id,
            artist_id,
            user_id
        }) 
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => {
            let artist = data;
            let _id = artist._id;
            let favArtistName = artist.favArtistName;
            let video_id = artist.video_id;
            let artist_id = artist.artist_id;
            let user_id = artist.user_id;
            dispatch(addFavoriteArtistSuccess(_id, favArtistName, video_id, artist_id, user_id));
        })
        .catch(err => {
            dispatch(fetchFavoriteArtistsError(err));
        });
};

export const fetchFavoriteArtists = (user_id) => (dispatch, getState) => {
    console.log(user_id);
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/favartists/${user_id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            // console.log(artists);
            let artists = data.favoriteArtists;
            console.log(artists);
            artists.forEach(function (artist)   {
                let _id = artist._id;
                let favArtistName = artist.favArtistName;
                let video_id = artist.video_id;
                let artist_id = artist.artist_id;
                let user_id = artist.user_id;
                dispatch(fetchFavoriteArtistsSuccess(_id, favArtistName, video_id, artist_id, user_id));
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
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            // console.log(artists);
            let events = data.favoriteEvents;
            // console.log(events);
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

export const DELETE_FAVORITE_ARTIST_SUCCESS = 'DELETE_FAVORITE_ARTIST_SUCCESS';
export const deleteFavoriteArtistSuccess = ( favoriteArtist ) => ({
    type: DELETE_FAVORITE_ARTIST_SUCCESS,
    favoriteArtist
});

export const DELETE_FAVORITE_ARTIST_ERROR = 'DELETE_FAVORITE_ARTIST_ERROR';
export const deleteFavoriteArtistError = error => ({
    type: DELETE_FAVORITE_ARTIST_ERROR,
    error
});

export const deleteFavoriteArtist = (_id) => (dispatch, getState) => {
    // const removeFavArtist = _id;
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/favartists/${_id}`, {
        method: 'DELETE',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(json => {
            // console.log(removeFavArtist);
            console.log(json);
            // console.log(_id);
            dispatch(deleteFavoriteArtistSuccess(json))
        })
        .catch(err => {
            dispatch(deleteFavoriteArtistError(err));
        });
};


export const DELETE_FAVORITE_EVENT_SUCCESS = 'DELETE_FAVORITE_EVENT_SUCCESS';
export const deleteFavoriteEventSuccess = (favoriteEvent) => ({
    type: DELETE_FAVORITE_EVENT_SUCCESS,
    favoriteEvent
});

export const DELETE_FAVORITE_EVENT_ERROR = 'DELETE_FAVORITE_EVENT_ERROR';
export const deleteFavoriteEventError = error => ({
    type: DELETE_FAVORITE_EVENT_ERROR,
    error
});

export const deleteFavoriteEvent = (_id) => (dispatch, getState) => {
    // const removeFavArtist = _id;
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/favevents/${_id}`, {
        method: 'DELETE',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(json => {
            // console.log(removeFavArtist);
            console.log(json);
            // console.log(_id);
            dispatch(deleteFavoriteEventSuccess(json))
        })
        .catch(err => {
            dispatch(deleteFavoriteEventError(err));
        });
};

export const CLEAR_FAVORITES = 'CLEAR_FAVORITES';
export const clearFavorites = initialState => ({
    type: CLEAR_FAVORITES,
    initialState
});
