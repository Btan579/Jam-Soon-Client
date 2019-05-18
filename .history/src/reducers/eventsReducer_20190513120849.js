import {
    SET_SEARCH_CITY,
    SET_SEARCH_DATE,
    SET_API_DATE,
    SET_METRO_SEARCH,
    FETCH_METRO_CODE_SUCCESS,
    FETCH_EVENTS_SUCCESS
} from '../actions';

import {
    ADD_FAVORITE_ARTIST,
    ADD_FAVORITE_EVENT,
    FETCH_FAVORITE_ARTISTS_SUCCESS,
    FETCH_FAVORITE_EVENTS_SUCCESS,
    DELETE_FAVORITE_ARTIST_SUCCESS
} from '../actions/favorites';

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
            venueName: "Club60",
            venueLocation: "New Orleans",
            event_id: '777777',
        }

    ],
    favoriteArtists: [],
    favoriteEvents: []

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
            favoriteArtists: [...state.favoriteArtists.filter(favoriteArtist._id !== action._id)]
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