const initialState = {
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
            eventName: "Lollapalooza",
            date: "8/10/1997",
            headliner: "Metallica",
            supportingArtists: ["Janes Addiction", "Deadmau5"],
            venue: "Madison Square Garden",
            city: "New York",
            state: "New York",
            zip: "08181",
            country: "USA"
        }
    ],
    landingSections : [
        {
            heading: "How it works",
            subHeading: "Start by entering a local metro area and date",
            image: "[Screenshot of interface with area input demo]",
            text: "After entering an area followed by a date, you will be shown a list of concerts thats happening on the slected day."
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

const reducer = (state = initialState, action) => {
    return state;
};

export default reducer;