export const SET_SEARCH_CITY = 'SET_SEARCH_CITY';
export const setSearchCity = currentSearchCity => ({
    type: SET_SEARCH_CITY,
    currentSearchCity
});

export const SET_SEARCH_DATE = 'SET_SEARCH_DATE';
export const setSearchDate = currentSearchDate => ({
    type: SET_SEARCH_DATE,
    currentSearchDate
});

export const SET_API_DATE = 'SET_API_DATE';
export const setApiDate = currentApiDate => ({
    type: SET_API_DATE,
    currentApiDate
});

export const ADD_FAVORITE_ARTIST = 'ADD_FAVORITE_ARTIST';
export const addFavoriteArtist = (name, playlist) => ({
    type: ADD_FAVORITE_ARTIST,
    name,
    playlist
});

export const ADD_FAVORITE_EVENT = 'ADD_FAVORITE_EVENT';
export const addFavoriteEvent = (eventName, date, headliner, supportingArtistis, venue, city, state, zip, country) => ({
    type: ADD_FAVORITE_EVENT,
    eventName,
    date,
    headliner,
    supportingArtistis,
    venue,
    city,
    state,
    zip,
    country
});