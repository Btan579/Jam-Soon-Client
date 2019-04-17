import {
    SET_SEARCH_CITY,
    SET_SEARCH_DATE,
    SET_API_DATE,
    ADD_FAVORITE_ARTIST,
    ADD_FAVORITE_EVENT,
    SET_METRO_SEARCH
} from '../actions';

const initialState = {
    currentUser: {  
        username: "btan579"
    },
    currentSearchCity: "Boston",
    currentSearchDate: "10/31/2019",
    currentApiDate: "2020/10/31",
    metroSearchTerms: {
        countryCode: "",
        usState: "",
        cityName: ""
    },
    countryDropState: {
        country: '',
        region: ' ',
        disabled: true
    },
    events: [
        {
            eventDay: "October 31st 2020",
            eventName: "Monster Mash: Featuring No Doubt",
            headliner: "No Doubt",
            headlinerPlaylist: "youtube.net/nodoubt",
            secondArtist: "Smashmouth",
            secondArtistPlaylist: "youtube.net/smashmouth",
            venueName: "Club60",
            venueAddress: "123 Main St.",
            venueCity: "Boston",
            venueZip: "02110",
            venueState: "MA",
            venueCountry: "USA",
            venueWesbite: "www.club60.com",
            venuePhone: "781-888-444",
            venueDescription: "First opened in 1962, Club 60 is a diamond in the rough"
            }
        
    ],
    favoriteArtists: [
        {
            name: "311",
            playlist: "www.youtube.net/311-playlist"
        }
    ],
    favoriteEvents: [
        {
            favEventName: "Lollapalooza",
            favDate: "8/10/1997",
            favHeadliner: "Metallica",
            favSupportingArtists: ["Janes Addiction", "Deadmau5"],
            favVenue: "Madison Square Garden",
            favCity: "New York",
            favState: "New York",
            favZip: "08181",
            favCountry: "USA"
        },
        {
            favEventName: "NYE Times Square",
            favDate: "12/31/1999",
            favHeadliner: "Coldplay",
            favSupportingArtists: ["Lil Wayne", "Deadmau5"],
            favVenue: "Madison Square Garden",
            favCity: "New York",
            favState: "New York",
            favZip: "08181",
            favCountry: "USA"
        }
    ],
    landingSections : [
        {
            heading: "How it works",
            subHeading: "Start by entering a local metro area and date",
            image: "[Screenshot of interface with area input demo]",
            text: "After entering an area followed by a date, you will be shown a list of concerts thats happening on the selected day."
        },
        {
            heading: "Get all the details",
            subHeading: "And even listen",
            image: "[Screenshot of events for a specific day]",
            text: "All of the events details will be listed as well as a popular playlist from the artist."
        },
        {
            heading: "Keep track of what you love",
            subHeading: "Favorite artists and events",
            image: "[Screenshot user favorites page]",
            text: "Users who are registered are able to save an artist or save an event to their account favorites."
        }
    ]
};

export const reducer = (state = initialState, action) => {
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
                    playlist: action.playlist
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
                 favCity: action.favCity,
                 favState: action.favState,
                 favZip: action.favZip,
                 favCountry: action.favCountry
            }]
        });
    }
    if (action.type === SET_METRO_SEARCH) {
        return Object.assign({}, state, {
            metroSearchTerms: {
                countryCode: action.countryCode,
                usState: action.usState,
                cityName: action.cityName
            }
        });
    }
    return state;
};

export default reducer;