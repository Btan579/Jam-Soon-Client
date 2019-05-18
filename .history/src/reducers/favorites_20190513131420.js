import {
    ADD_FAVORITE_ARTIST,
    ADD_FAVORITE_EVENT,
    FETCH_FAVORITE_ARTISTS_SUCCESS,
    FETCH_FAVORITE_EVENTS_SUCCESS,
    DELETE_FAVORITE_ARTIST_SUCCESS
} from '../actions/favorites';

const initialState = {

    favoriteArtists: [],
    favoriteEvents: []

};

const favoritesReducer = (state = initialState, action) => {
    if (action.type === ADD_FAVORITE_ARTIST) {
        return Object.assign({}, state, {
            favoriteArtists: [...state.favoriteArtists, {
                name: action.name,
                playlist: action.playlist,
                user_id: action.user_id,
                artist_id: action.artist_id
            }]
        });
    }
    if (action.type === ADD_FAVORITE_EVENT) {
        return Object.assign({}, state, {
            favoriteEvents: [...state.favoriteEvents, {
                favEventName: action.favEventName,
                favDate: action.favDate,
                favHeadliner: action.favHeadliner,
                favSupportingArtists: action.favSupportingArtists,
                favVenue: action.favVenue,
                favVenueLocation: action.favVenueLocation,
                event_id: action.event_id,
                user_id: action.user_id
            }]
        });
    }
    if (action.type === FETCH_FAVORITE_ARTISTS_SUCCESS) {
        return Object.assign({}, state, {
            favoriteArtists: [...state.favoriteArtists, {
                name: action.name,
                playlist: action.playlist,
                user_id: action.user_id,
                artist_id: action.artist_id,
                _id: action._id
            }]
        });
    }
    if (action.type === FETCH_FAVORITE_EVENTS_SUCCESS) {
        return Object.assign({}, state, {
            favoriteEvents: [...state.favoriteEvents, {
                favEventName: action.favEventName,
                favDate: action.favDate,
                favHeadliner: action.favHeadliner,
                favSupportingArtists: action.favSupportingArtists,
                favVenue: action.favVenue,
                favVenueLocation: action.favVenueLocation,
                event_id: action.event_id,
                user_id: action.user_id,
                _id: action._id
            }]
        });
    }
    if (action.type === DELETE_FAVORITE_ARTIST_SUCCESS) {
        return Object.assign({}, state, {
            favoriteArtists: state.favoriteArtists.filter(favoriteArtist => favoriteArtist._id !== action.favoriteArtist._id)
        });
    }
    return state;
};

export default favoritesReducer;