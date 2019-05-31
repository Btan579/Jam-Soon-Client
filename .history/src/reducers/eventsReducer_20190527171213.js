import {
    SET_SEARCH_CITY,
    SET_SEARCH_DATE,
    SET_API_DATE,
    SET_METRO_SEARCH,
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
    currentApiDate: "",
    metroCode: "",
    events: [],
    videosData: [],
    error: ""

};

const eventsReducer = (state = initialState, action) => {
    if (action.type === SET_SEARCH_CITY){
        return Object.assign({}, state, {
            currentSearchCity: action.currentSearchCity
        });
    }
    if (action.type === SET_SEARCH_DATE) {
        return Object.assign({}, state, {
            currentSearchDate: action.currentSearchDate
        });
    }
    if (action.type === SET_API_DATE) {
        return Object.assign({}, state, {
            currentApiDate: action.currentApiDate
        });
    }
    if (action.type === FETCH_METRO_CODE_SUCCESS) {
        return Object.assign({}, state, {
            metroCode: action.metroCode
        });
    }
    if (action.type === FETCH_EVENTS_SUCCESS) {
        return Object.assign({}, state, {
            events: action.eventsArr
        });
    }
    if (action.type === FETCH_YT_VIDEOS_SUCCESS) {

        let index = state.videosData.findIndex(video => video.artist_id === action.video.artist_id);
        
        if(index === -1)
        return Object.assign({}, state, {
            videosData: [...state.videosData,  action.video]
        });
    }
    return state;
};

export default eventsReducer;
