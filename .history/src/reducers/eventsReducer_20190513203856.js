import {
    SET_SEARCH_CITY,
    SET_SEARCH_DATE,
    SET_API_DATE,
    SET_METRO_SEARCH,
    FETCH_METRO_CODE_SUCCESS,
    FETCH_EVENTS_SUCCESS
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
    metroCode: "",
    events: [
        {
            eventDay: "October 31st 2020",
            eventName: "Monster Mash: Featuring No Doubt",
            headliner: "No Doubt",
            headliner_id: "ND777",
            headlinerPlaylist: "youtube.net/nodoubt",
            secondArtist: "Smashmouth",
            secondArtist_id: "SM555",
            secondArtistPlaylist: "youtube.net/smashmouth",
            performingArtists: [],
            venueName: "Club60",
            venueLocation: "New Orleans",
            event_id: '777777',
        }

    ]
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
            events: [...state.events, {
                eventDay: action.eventDay,
                eventName: action.eventName,
                performingArtists: [action.performingArtists],
                headliner: action.headliner,
                headlinerPlaylist: action.headlinerPlaylist,
                secondArtist: action.secondArtist,
                secondArtistPlaylist: action.secondArtistPlaylist,
                venueName: action.venueName,
                venueLocation: action.venueLocation,
                event_id: action.event_id
            }]
        });
    }
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