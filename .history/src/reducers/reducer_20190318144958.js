const initialState = {
    MockEvent: {
        eventDay: "October 31st 2020",
        Event: {
            eventName: "Monster Mash: Featuring No Doubt",
            artists: {
                firstArtist: "No Doubt",
                secondArtist: "Smashmouth",
            },
            venue: {
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

    },

    MockFavorites: {
        favoriteArtists: {
            artist: {
                name: "311",
                playlist: "www.youtube.net/311-playlist"
            }
        },
        favoriteEvents: {
            event: {
                eventName: "Lollapalooza",
                date: "8/10/1997",
                artists: ["Metallica, ", "Janes Addiction"],
                venue: "Madison Square Garden",
                city: "New York",
                state: "New York",
                zip: "08181",
                country: "USA"
            }
        }
    }
};

const reducer = (state = initialState, action) => {
    return state;
};

export default reducer;