import {
    ADD_FAVORITE_ARTIST_SUCCESS,
    ADD_FAVORITE_EVENT_SUCCESS,
    FETCH_FAVORITE_ARTISTS_SUCCESS,
    FETCH_FAVORITE_EVENTS_SUCCESS,
    DELETE_FAVORITE_ARTIST_SUCCESS,
    DELETE_FAVORITE_EVENT_SUCCESS
} from '../actions/favorites';

const initialState = {
    favoriteArtists: [],
    favoriteEvents: []
};

const favoritesReducer = (state = initialState, action) => {
    if (action.type === ADD_FAVORITE_ARTIST_SUCCESS) {
        return Object.assign({}, state, {
            favoriteArtists: [...state.favoriteArtists, {
                favArtistName: action.favArtistName,
                video_id: action.video_id,
                user_id: action.user_id,
                artist_id: action.artist_id,
                _id: action._id
            }]
        });
    }
    if (action.type === ADD_FAVORITE_EVENT_SUCCESS) {
    
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
            }];
        
    }
    if (action.type === FETCH_FAVORITE_ARTISTS_SUCCESS) {
        return Object.assign({}, state, {
            favoriteArtists: [...state.favoriteArtists, {
                favArtistName: action.favArtistName,
                video_id: action.video_id,
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
    if (action.type === DELETE_FAVORITE_EVENT_SUCCESS) {
        return Object.assign({}, state, {
            favoriteEvents: state.favoriteEvents.filter(favoriteEvent => favoriteEvent._id !== action.favoriteEvent._id)
        });
    }
    return state;
};

export default favoritesReducer;