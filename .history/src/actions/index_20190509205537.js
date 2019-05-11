import { SONG_KICK_KEY, SONG_KICK_BASE_URL_METRO, SONG_KICK_BASE_URL_EVENT } from '../config';
import moment from 'moment';

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
export const addFavoriteArtist = (name, playlist, artist_id, user_id) => ({
    type: ADD_FAVORITE_ARTIST,
    name,
    playlist,
    artist_id,
    user_id
});

export const ADD_FAVORITE_EVENT = 'ADD_FAVORITE_EVENT';
export const addFavoriteEvent = (favEventName, favDate, favHeadliner, favSupportingArtists, favVenue, favVenueLocation, user_id, event_id ) => ({
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

export const SET_METRO_SEARCH = 'SET_METRO_SEARCH';
export const setMetroSearch = (countryCode, stateName, cityName) => ({
    type: SET_METRO_SEARCH,
    countryCode, stateName, cityName
});

export const FETCH_METRO_CODE_SUCCESS = 'FETCH_METRO_CODE_SUCCESS';
export const fetchMetroCodeSuccess = metroCode => ({
    type: FETCH_METRO_CODE_SUCCESS,
    metroCode
});

export const fetchMetroCode = (countryCode, stateValue, cityName) => dispatch => {
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



export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENT_SUCCESS';
export const fetchEventsSuccess = (eventDay, eventName, headliner, headlinerPlaylist, secondArtist, secondArtistPlaylist, venueName, venueLocation, event_id) => ({
    type: FETCH_EVENTS_SUCCESS,
    eventDay,
    eventName,
    headliner,
    headlinerPlaylist,
    secondArtist,
    secondArtistPlaylist,
    venueName,
    venueLocation,
    event_id
});

export const fetchEvents = (metroCode, dateSelected) => dispatch => {
    fetch(`${SONG_KICK_BASE_URL_EVENT}${metroCode}/calendar.json?min_date=${dateSelected}&max_date=${dateSelected}&apikey=${SONG_KICK_KEY}`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
           
            return res.json();
            // console.log(res.json());
            // resultsPage.results.location;
        })
        .then(resdata => {
           return resdata;
        })
        .then(data => {
            // console.log(data);
            let events = data.resultsPage.results.event;
            for (let i = 0; i < events.length; i++) {
               let dateC = moment(events[i].start.date).format("MMM DD, YYYY");       
                let eventDay = events[i].start.date
                let eventName = events[i].displayName.trim(`(${dateC})`);;
                console.log(eventName);
                let headliner = "pogu";
                let headlinerPlaylist = "pog.w.net";
                let secondArtist = "pogu";
                let secondArtistPlaylist = "pog.w.net";
                let venueName = events[i].venue.displayName;
                let venueLocation = events[i].location.city;
                let event_id = events[i].id;
               console.log(dateC);
                dispatch(fetchEventsSuccess(eventDay, eventName, headliner, headlinerPlaylist, secondArtist, secondArtistPlaylist, venueName, venueLocation, event_id));
            }
            console.log(events[0]);
            console.log(events[1]);
            // let metrodata = data.resultsPage.results.location[0].metroArea.id;
            // let city = data.resultsPage.results.location[0].metroArea.displayName;
            // console.log(metrodata);
            // dispatch(setSearchCity(city));
            // dispatch(fetchEventsSuccess(concert));
        });
};
