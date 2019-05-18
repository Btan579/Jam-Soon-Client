import { API_BASE_URL } from '../config';

export const ADD_FAVORITE_ARTIST = 'ADD_FAVORITE_ARTIST';
export const addFavoriteArtist = ( name, playlist, artist_id, user_id ) => ({
    type: ADD_FAVORITE_ARTIST,
    name,
    playlist,
    artist_id,
    user_id
});

export const ADD_FAVORITE_EVENT = 'ADD_FAVORITE_EVENT';
export const addFavoriteEvent = ( favEventName, favDate, favHeadliner, favSupportingArtists, favVenue, favVenueLocation, user_id, event_id ) => ({
    type: ADD_FAVORITE_EVENT,
    favEventName,
    favDate,
    favHeadliner,
    favSupportingArtists,
    favVenue,
    favVenueLocation,
    event_id,
    user_id
});

export const FETCH_FAVORITE_ARTISTS_SUCCESS = 'FETCH_FAVORITE_ARTISTS_SUCCESS';
export const fetchMetroCodeSuccess = (_id, name, playlist, artist_id, user_id ) => ({
    type: FETCH_FAVORITE_ARTISTS_SUCCESS,
    _id,
    name,
    playlist,
    artist_id,
    user_id
});

export const fetchFavoriteArtists = ( countryCode, stateValue, cityName ) => dispatch => {
    fetch(`${SONG_KICK_BASE_URL_METRO}${cityName},${stateValue},${countryCode}&apikey=${SONG_KICK_KEY}`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(resdata => {
            return resdata;
        })
        .then(data => {
            let metrodata = data.resultsPage.results.location[0].metroArea.id;
            let city = data.resultsPage.results.location[0].metroArea.displayName;
            console.log(metrodata);
            dispatch(setSearchCity(city));
            dispatch(fetchMetroCodeSuccess(metrodata));
        });
};