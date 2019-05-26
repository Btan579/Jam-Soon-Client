import {
    SET_SEARCH_CITY,
    SET_SEARCH_DATE,
    SET_API_DATE,
    SET_METRO_SEARCH,
    FETCH_METRO_CODE_SUCCESS,
    FETCH_EVENTS_SUCCESS,
    FETCH_YT_VIDEOS_SUCCESS
} from '../actions';

const initialState = {
    currentUser: {
        username: "btan579"
    },
    currentSearchCity: "Boston",
    currentSearchDate: "10/31/2019",
    currentApiDate: "2020/10/31",

    metroSearchTerms: {
        countryCode: "US",
        stateName: "",
        cityName: ""
    },
    events: [],
    videosData: []

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
    if (action.type === SET_METRO_SEARCH) {
        return Object.assign({}, state, {
            metroSearchTerms: {
                countryCode: action.countryCode,
                stateName: action.stateName,
                cityName: action.cityName
            }
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
        let vidCheck = state.videosData.find(video => video.artist_id === action.video.artist_id);
        if( vidCheck === null){
             console.log('not found');
        } else {
            console.log('found duplicate');
        }
        return Object.assign({}, state, {
            videosData: [...state.videosData,  action.video]
        });
    }
    // if (action.type === FETCH_YT_PLAYLISTS_SUCCESS) {
    //     return Object.assign({}, state, {
    //         events: state.events.map(event => event.event_id === action.playlist.event_id ? action.playlist : playlist})
    // }
    return state;
};

export default eventsReducer;




// favoriteArtists: [
//     {
//         name: "311",
//         playlist: "www.youtube.net/311-playlist",
//         artist_id: '54564564',
//         user_id: 'aaaaa4d',
//         _id: ''
//     }
// ],
//     favoriteEvents: [
//         {
//             favEventName: "Lollapalooza",
//             favDate: "8/10/1997",
//             favHeadliner: "Metallica",
//             favSupportingArtists: ["Janes Addiction", "Deadmau5"],
//             favVenue: "Madison Square Garden",
//             favVenueLocation: "New York, New York",
//             event_id: '4s45445',
//             user_id: 'aaaaa4d'
//         },
//         {
//             favEventName: "NYE Times Square",
//             favDate: "12/31/1999",
//             favHeadliner: "Coldplay",
//             favSupportingArtists: ["Lil Wayne", "Deadmau5"],
//             favVenue: "Madison Square Garden",
//             favVenueLocation: "New York, New York",
//             event_id: '448851',
//             user_id: 'aaaaa4d',
//             _id: ''
//         }
//     ]