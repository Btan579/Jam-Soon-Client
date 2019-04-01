import {
    SET_SEARCH_CITY,
    SET_SEARCH_DATE,
    SET_API_DATE,
    ADD_FAVORITE_ARTIST
} from '../actions';

const initialState = {
    currentUser: {  
        username: "btan579"
    },
    currentSearchCity: "Boston",
    currentSearchDate: "4/19/2019",
    currentApiDate: "2019/4/19",
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
            FavEventName: "Lollapalooza",
            FavDate: "8/10/1997",
            FavHeadliner: "Metallica",
            FavSupportingArtists: ["Janes Addiction", "Deadmau5"],
            FavVenue: "Madison Square Garden",
            FavCity: "New York",
            FavState: "New York",
            FavZip: "08181",
            FavCountry: "USA"
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
    return state;
};

export default reducer;