import {
    SET_SEARCH_DATE,
    FETCH_METRO_CODE_SUCCESS,
    FETCH_EVENTS_SUCCESS,
    FETCH_YT_VIDEOS_SUCCESS,
    FETCH_EVENTS_ERROR,
    FETCH_YT_VIDEOS_ERROR,
    FETCH_METRO_CODE_ERROR
} from '../actions';

const initialState = {
    currentUser: {
        username: ""
    },
    currentSearchCity: "",
    currentSearchDate: "",
    metroCode: "",
    events: [],
    videosData: [],
    metroError: "",
    dateError: ""

};

const eventsReducer = (state = initialState, action) => {
    if (action.type === SET_SEARCH_DATE) {
        return Object.assign({}, state, {
            currentSearchDate: action.currentSearchDate
        });
    }
    if (action.type === FETCH_METRO_CODE_SUCCESS) {
        return Object.assign({}, state, {
            metroCode: action.metroCode,
            metroError: "",
            currentSearchCity: action.city
        });
    }
    if (action.type === FETCH_METRO_CODE_ERROR) {
        return Object.assign({}, state, {
            metroError: action.err
        });
    }
    if (action.type === FETCH_EVENTS_SUCCESS) {
        return Object.assign({}, state, {
            events: action.eventsArr,
            dateError: ""
        });
    }
    if (action.type === FETCH_EVENTS_ERROR) {
        return Object.assign({}, state, {
            dateError: action.err
        });
    }
    if (action.type === FETCH_YT_VIDEOS_SUCCESS) {

        let index = state.videosData.findIndex(video => video.artist_id === action.video.artist_id);
        
        if(index === -1)
        return Object.assign({}, state, {
            videosData: [...state.videosData,  action.video]
        });
    }
    if (action.type === CLEAR_EVENTS) {
        return Object.assign({}, state, {
            events: action.initialState
        });
    }
    return state;
};

export default eventsReducer;
