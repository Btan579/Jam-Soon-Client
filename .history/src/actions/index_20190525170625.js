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
export const fetchEventsSuccess = (eventsArr) => ({
    type: FETCH_EVENTS_SUCCESS,
    eventsArr
});

export const fetchEvents = (metroCode, dateSelected) => dispatch => {
    let eventsArr = [];

    fetch(`${SONG_KICK_BASE_URL_EVENT}${metroCode}/calendar.json?min_date=${dateSelected}&max_date=${dateSelected}&apikey=${SONG_KICK_KEY}`)
        .then(async res => {
            if (await !res.ok) {
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
                let performingArtists = [];
                let performers = events[i].performance
                let dateC = moment(events[i].start.date).format("MMM DD, YYYY");
                let eventDay = dateC;
                let eventName = events[i].displayName.replace(` (${dateC})`, '');

                performers.map(function (performer) {
                    // let playlistQuery = performer.displayName;
                    //     fetch(`${YOU_TUBE_BASE_URL}?part=snippet&q=${playlistQuery}&type=playlist&maxResults=1&key=${YOU_TUBE_KEY}`)
                    //         .then(res => {
                    //             return res.json();
                    //         })
                    //         .then(data => {
                    let act = {
                        artist_id: performer.artist.id,
                        artistName: performer.artist.displayName,
                        billSlot: performer.billing,
                        billIndex: performer.billingIndex,
                        event_id: events[i].id,
                        // playlist_id: data.items[0].id.playlistId,
                        // thumbnail: data.items[0].snippet.thumbnails.high.url
                    };
                    performingArtists.push(act);
                    dispatch(fetchYTplaylists(act.artistName, act));
                    // });    
                });

                let headliner = performingArtists[0];
                let headlinerPlaylist = "pog.w.net";
                let secondArtist = "pogu";
                let secondArtistPlaylist = "pog.w.net";
                let venueName = events[i].venue.displayName;
                let venueLocation = events[i].location.city;
                let event_id = events[i].id;

                let evnt = {
                    eventDay: eventDay,
                    eventName: eventName,
                    headliner: headliner,
                    headlinerPlaylist: headlinerPlaylist,
                    secondArtist: secondArtist,
                    secondArtistPlaylist: secondArtistPlaylist,
                    venueName: venueName,
                    venueLocation: venueLocation,
                    event_id: event_id,
                    performingArtists: performingArtists
                }
                eventsArr.push(evnt);
            }
            dispatch(fetchEventsSuccess(eventsArr));
        });
};


export const fetchYTplaylists = (videoQuery, act) => dispatch => {
    // console.log(playlistQuery);
    let videosArr = [];
    // console.log(act)
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
            // console.log(data);
            const newAct = {
                artist_id: act.artist_id,
                artistName: act.artistName,
                billSlot: act.billSlot,
                billIndex: act.billIndex,
                event_id: act.event_id,
                video_id: data.items[0].id.videoId
            }
            videosArr.push(newAct);
            dispatch(fetchYTSuccess(newAct));
  
        });
        // console.log(videosArr);
};

export const FETCH_YT_VIDEOS_SUCCESS = 'FETCH_YT_VIDEOS_SUCCESS';
export const fetchYTSuccess = (video) => ({
    type: FETCH_YT_VIDEOS_SUCCESS,
    video
});




   // performers.forEach(function (performer) {
                //     let playlistQuery = performer.displayName;
                //     fetch(`${YOU_TUBE_BASE_URL}?part=snippet&q=${playlistQuery}&type=playlist&maxResults=1&key=${YOU_TUBE_KEY}`)
                //         .then(res => {
                //             return res.json();
                //         })
                //         .then(data => {

                //             let act = {
                //                 artist_id: performer.artist.id,
                //                 artistName: performer.artist.displayName,
                //                 billSlot: performer.billing,
                //                 billIndex: performer.billingIndex,
                //                 event_id: event_id,
                //                 playlist_id: data.items[0].id.playlistId,
                //                 thumbnail: data.items[0].snippet.thumbnails.high.url
                //             };
                //             performingArtists.push(act);
                //         });


                //         // console.log(YT_playlist_data);


                //     // let playlistQuery = performer.displayName;
                //     // dispatch(fetchYTplaylists(playlistQuery, act));

                // });