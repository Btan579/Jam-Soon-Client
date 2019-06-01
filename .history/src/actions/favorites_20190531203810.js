import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
import { toast } from "react-toastify";
// Add Favortite Events


// export const addFavoriteEventSuccess = (favEventName, favDate, favArtists, favVenue, favVenueLocation, event_id, user_id, _id) => ({
//     type: ADD_FAVORITE_EVENT_SUCCESS,
//     favEventName,
//     favDate,
//     favArtists,
//     favVenue,
//     favVenueLocation,
//     event_id,
//     user_id,
//     _id
// });

export const ADD_FAVORITE_EVENT_SUCCESS = 'ADD_FAVORITE_EVENT_SUCCESS';
export function addFavoriteEventSuccess(favEventName, favDate, favArtists, favVenue, favVenueLocation, event_id, user_id, _id) {
    return function (dispatch) {
        dispatch({
            type: ADD_FAVORITE_EVENT_SUCCESS,
            favEventName,
            favDate,
            favArtists,
            favVenue,
            favVenueLocation,
            event_id,
            user_id,
            _id
        });
        toast.success("Event favorited successfully");
    };
}


export const addFavoriteEvent = (favEventName, favDate, favArtists, favVenue, favVenueLocation, event_id, user_id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/favevents/`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            favEventName, favDate, favArtists, favVenue, favVenueLocation, event_id, user_id
        })
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((data) => {
        let event = data;
        let _id = event._id;
        let favEventName = event.favEventName;
        let favDate = event.favDate;
        let favArtists = event.favArtists;
        let favVenue = event.favVenue;
        let favVenueLocation = event.favVenueLocation;
        let event_id = event.event_id;
        let user_id = event.user_id;
        dispatch(addFavoriteEventSuccess(favEventName, favDate, favArtists, favVenue, favVenueLocation, event_id, user_id, _id));
    })
    .catch(err => {
        dispatch(addFavoriteEventError(err));
    });
};

export const ADD_FAVORITE_EVENT_ERROR = 'ADD_FAVORITE_EVENT_ERROR';
export function addFavoriteEventError(err) {
    return function (dispatch) {
        dispatch({
            type: ADD_FAVORITE_EVENT_ERROR,
            err
        });
        toast.error("Event already favorited!");
    };
}
// export const addFavoriteEventError = error => ({
//     type: ADD_FAVORITE_EVENT_ERROR,
//     error
// });

// Add Favorite Artist
export const ADD_FAVORITE_ARTIST_SUCCESS = 'ADD_FAVORITE_ARTIST_SUCCESS';
export function addFavoriteArtistSuccess(favArtistName, video_id, artist_id, user_id, _id) {
    return function (dispatch) {
        dispatch({
            type: ADD_FAVORITE_ARTIST_SUCCESS,
            favArtistName,
            video_id,
            artist_id,
            user_id,
            _id
        });
        toast.success("Artist favorited successfully!");
    };
}
// export const addFavoriteArtistSuccess = (favArtistName, video_id, artist_id, user_id, _id) => ({
//     type: ADD_FAVORITE_ARTIST_SUCCESS,
//     favArtistName,
//     video_id,
//     artist_id,
//     user_id,
// //     _id
// });

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
        dispatch(addFavoriteArtistSuccess(favArtistName, video_id, artist_id, user_id, _id));
    })
    .catch(err => {
        dispatch(fetchFavoriteArtistsError(err));
    });
};

export const ADD_FAVORITE_ARTIST_ERROR = 'ADD_FAVORITE_ARTIST_ERROR';
export function addFavoriteArtistError(err) {
    return function (dispatch) {
        dispatch({
            type: ADD_FAVORITE_ARTIST_ERROR,
            err
        });
        toast.error("Artist already favorited!");
    };
}
// export const addFavoriteArtistError = error => ({
//     type: ADD_FAVORITE_ARTIST_ERROR,
//     error
// });

// Fetch Favorite Artists
export const FETCH_FAVORITE_ARTISTS_SUCCESS = 'FETCH_FAVORITE_ARTISTS_SUCCESS';
export const fetchFavoriteArtistsSuccess = (_id, favArtistName, video_id, artist_id, user_id) => ({
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

export const fetchFavoriteArtists = (user_id) => (dispatch, getState) => {
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
        let artists = data.favoriteArtists;
            
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

// Fetch Favorite Events
export const FETCH_FAVORITE_EVENTS_SUCCESS = 'FETCH_FAVORITE_EVENTS_SUCCESS';
export const fetchFavoriteEventsSuccess = (_id, favEventName, favDate, favArtists, favVenue, favVenueLocation, user_id, event_id) => ({
    type: FETCH_FAVORITE_EVENTS_SUCCESS,
    _id,
    favEventName,
    favDate,
    favArtists,
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
        let events = data.favoriteEvents;

        events.forEach(function (evnt) {
            let _id = evnt._id;
            let favEventName = evnt.favEventName;
            let favDate = evnt.favDate;
            let favArtists = evnt.favArtists;
            let favVenue = evnt.favVenue;
            let favVenueLocation = evnt.favVenueLocation;
            let event_id = evnt.event_id;
            let user_id = evnt.user_id;
            dispatch(fetchFavoriteEventsSuccess(_id, favEventName, favDate, favArtists, favVenue, favVenueLocation, user_id, event_id));
        });
    })
    .catch(err => {
        dispatch(fetchFavoriteArtistsError(err));
    });
};

// Delete Favorite Artist
export const DELETE_FAVORITE_ARTIST_SUCCESS = 'DELETE_FAVORITE_ARTIST_SUCCESS';
export function deleteFavoriteArtistSuccess(favoriteArtist) {
    return function (dispatch) {
        dispatch({
            type: DELETE_FAVORITE_ARTIST_SUCCESS,
            favoriteArtist
        });
        toast.warning("Artist removed from favorites!");
    };
}
// export const deleteFavoriteArtistSuccess = ( favoriteArtist ) => ({
//     type: DELETE_FAVORITE_ARTIST_SUCCESS,
//     favoriteArtist
// });

export const DELETE_FAVORITE_ARTIST_ERROR = 'DELETE_FAVORITE_ARTIST_ERROR';
export const deleteFavoriteArtistError = error => ({
    type: DELETE_FAVORITE_ARTIST_ERROR,
    error
});

export const deleteFavoriteArtist = (_id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/favartists/${_id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(json => {
        dispatch(deleteFavoriteArtistSuccess(json))
    })
    .catch(err => {
        dispatch(deleteFavoriteArtistError(err));
    });
};

// Delete Favorite Events
export const DELETE_FAVORITE_EVENT_SUCCESS = 'DELETE_FAVORITE_EVENT_SUCCESS';
export function deleteFavoriteEventSuccess(favoriteEvent) {
    return function (dispatch) {
        dispatch({
            type: DELETE_FAVORITE_EVENT_SUCCESS,
            err
        });
        toast.warning("Event removed from favorites!");
    };
}

// export const deleteFavoriteEventSuccess = (favoriteEvent) => ({
//     type: DELETE_FAVORITE_EVENT_SUCCESS,
//     favoriteEvent
// });

export const DELETE_FAVORITE_EVENT_ERROR = 'DELETE_FAVORITE_EVENT_ERROR';
export const deleteFavoriteEventError = error => ({
    type: DELETE_FAVORITE_EVENT_ERROR,
    error
});

export const deleteFavoriteEvent = (_id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/favevents/${_id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(json => {
        dispatch(deleteFavoriteEventSuccess(json))
    })
    .catch(err => {
        dispatch(deleteFavoriteEventError(err));
    });
};

// Clear Favorites
export const CLEAR_FAVORITES = 'CLEAR_FAVORITES';
export const clearFavorites = initialState => ({
    type: CLEAR_FAVORITES,
    initialState
});
