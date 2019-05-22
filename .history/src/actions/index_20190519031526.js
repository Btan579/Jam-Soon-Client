import { SONG_KICK_KEY, SONG_KICK_BASE_URL_METRO, SONG_KICK_BASE_URL_EVENT, YOU_TUBE_BASE_URL, YOU_TUBE_KEY } from '../config';
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
            // console.log(metrodata);
            dispatch(setSearchCity(city));
            dispatch(fetchMetroCodeSuccess(metrodata));
        });
};



export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENT_SUCCESS';
export const fetchEventsSuccess = (eventDay, eventName, headliner, headlinerPlaylist, secondArtist, secondArtistPlaylist, venueName, venueLocation, event_id, performingArtists) => ({
    type: FETCH_EVENTS_SUCCESS,
    eventDay,
    eventName,
    headliner,
    performingArtists,
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
        })
        .then(resdata => {
           return resdata;
        })
        .then(data => {
            // console.log(data);
            let events = data.resultsPage.results.event;
            
            for (let i = 0; i < events.length; i++) {
                let performers = events[i].performance
                let dateC = moment(events[i].start.date).format("MMM DD, YYYY");       
                let eventDay = dateC;
                let eventName = events[i].displayName.replace(` (${dateC})`, '');
                
                let performingArtists = [];
                performers.forEach(function (performer) {
                    
                   let act = {
                    artist_id: performer.artist.id,
                    artistName: performer.artist.displayName,
                    billSlot: performer.billing,
                    billIndex: performer.billingIndex
                   };
                    performingArtists.push(act);
                });
                // let headliner = performingArtists[0].artistName;
                let headliner = 'totmatos';
                let headlinerPlaylist = "pog.w.net";
                let secondArtist = "pogu";
                let secondArtistPlaylist = "pog.w.net";
                let venueName = events[i].venue.displayName;
                let venueLocation = events[i].location.city;
                let event_id = events[i].id;
                for (let j = 0; j < performingArtists.length; j++) {
                    let playlistQuery = performingArtists[j].artistName;
                    console.log(playlistQuery);
                    dispatch(fetchYTplaylists(playlistQuery));
                }

                dispatch(fetchEventsSuccess(eventDay, eventName, headliner, headlinerPlaylist, secondArtist, secondArtistPlaylist, venueName, venueLocation, event_id, performingArtists));
            }
          
        });
};

// https://www.googleapis.com/youtube/v3/search
export const fetchYTplaylists = (artistName) => dispatch => {
    fetch(`${YOU_TUBE_BASE_URL}?part=snippet&q=${artistName}&type=playlist&maxResults=1&key=${YOU_TUBE_KEY}`)
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
            console.log(data);
        });
};