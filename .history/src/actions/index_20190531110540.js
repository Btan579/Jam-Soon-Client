import { SONG_KICK_KEY, SONG_KICK_BASE_URL_METRO, SONG_KICK_BASE_URL_EVENT, YOU_TUBE_BASE_URL, YOU_TUBE_KEY } from '../config';
import moment from 'moment';

export const SET_SEARCH_DATE = 'SET_SEARCH_DATE';
export const setSearchDate = currentSearchDate => ({
    type: SET_SEARCH_DATE,
    currentSearchDate
});

export const FETCH_METRO_CODE_SUCCESS = 'FETCH_METRO_CODE_SUCCESS';
export const fetchMetroCodeSuccess = (metroCode, city) => ({
    type: FETCH_METRO_CODE_SUCCESS,
    metroCode,
    city
});

export const FETCH_METRO_CODE_ERROR = 'FETCH_METRO_CODE_ERROR';
export const fetchMetroCodeError = err => ({
    type: FETCH_METRO_CODE_ERROR,
    err
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
            
            dispatch(fetchMetroCodeSuccess(metrodata, city));
        })
        .catch(err => {
            dispatch(fetchMetroCodeError(err));
        });
};


// Fetch Events
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENT_SUCCESS';
export const fetchEventsSuccess = (eventsArr) => ({
    type: FETCH_EVENTS_SUCCESS,
    eventsArr
});

export const FETCH_EVENTS_ERROR = 'FETCH_EVENTS_ERROR';
export const fetchEventsError = err => ({
    type: FETCH_EVENTS_ERROR,
    err
});

export const fetchEvents = (metroCode, dateSelected) => dispatch => {
    let eventsArr = [];
    fetch(`${SONG_KICK_BASE_URL_EVENT}${metroCode}/calendar.json?min_date=${dateSelected}&max_date=${dateSelected}&apikey=${SONG_KICK_KEY}`)
        .then( res => {
            if ( !res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(resdata => {
            
            return resdata;
        })
        .then(data => {
            let events = data.resultsPage.results.event;

            for (let i = 0; i < events.length; i++) {
                let performingArtists = [];
                let performers = events[i].performance
                let dateC = moment(events[i].start.date).format("MMM DD, YYYY");
                let eventDay = dateC;
                let eventName = events[i].displayName.replace(` (${dateC})`, '');

                performers.map(function (performer) {
                    let act = {
                        artist_id: performer.artist.id,
                        artistName: performer.artist.displayName,
                        billSlot: performer.billing,
                        billIndex: performer.billingIndex,
                        event_id: events[i].id,
                       
                    };
                    performingArtists.push(act);
                    return dispatch(fetchYTplaylists(act.artistName, act));
                });

                let venueName = events[i].venue.displayName;
                let venueLocation = events[i].location.city;
                let event_id = events[i].id;
                let evnt = {
                    eventDay: eventDay,
                    eventName: eventName,
                    venueName: venueName,
                    venueLocation: venueLocation,
                    event_id: event_id,
                    performingArtists: performingArtists
                }
                eventsArr.push(evnt);
            }
            dispatch(fetchEventsSuccess(eventsArr));
        })
        .catch(err => {
            console.log(err);
            dispatch(fetchEventsError(err));
        });
};

export const fetchYTplaylists = (videoQuery, act) => dispatch => {
    fetch(`${YOU_TUBE_BASE_URL}?part=snippet&q=${videoQuery} music&type=video&maxResults=1&key=${YOU_TUBE_KEY}`)
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
            const newAct = {
                artist_id: act.artist_id,
                artistName: act.artistName,
                billSlot: act.billSlot,
                billIndex: act.billIndex,
                event_id: act.event_id,
                video_id: data.items[0].id.videoId
            }
            dispatch(fetchYTSuccess(newAct));
        })
        .catch(err => {
            dispatch(fetchYTError(err));
        });
};

export const FETCH_YT_VIDEOS_SUCCESS = 'FETCH_YT_VIDEOS_SUCCESS';
export const fetchYTSuccess = (video) => ({
    type: FETCH_YT_VIDEOS_SUCCESS,
    video
});

export const FETCH_YT_VIDEOS_ERROR = 'FETCH_YT_VIDEOS_ERROR';
export const fetchYTError = err => ({
    type: FETCH_YT_VIDEOS_ERROR,
    err
});