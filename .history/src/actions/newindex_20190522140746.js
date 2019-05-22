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
                        event_id: event_id,
                        // playlist_id: data.items[0].id.playlistId,
                        // thumbnail: data.items[0].snippet.thumbnails.high.url
                    };
                    performingArtists.push(act);
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


export const fetchYTplaylists = (playlistQuery, act ) => dispatch => {
    let titles = [];
    console.log(act)
    fetch(`${YOU_TUBE_BASE_URL}?part=snippet&q=${playlistQuery}&type=playlist&maxResults=1&key=${YOU_TUBE_KEY}`)
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
            const newAct= {
                artist_id: act.artist_id,
                artistName: act.artistName,
                billSlot: act.billSlot,
                billIndex: act.billIndex,
                playlist_id: data.items[0].id.playlistId,
                thumbnail: data.items[0].snippet.thumbnails.high.url
            }

            dispatch(fetchYTSuccess(newAct));
            titles.push(data.items[0].snippet.title);
            console.log(newAct);

        });
};

export const FETCH_YT_PLAYLISTS_SUCCESS = 'FETCH_YT_PLAYLISTS_SUCCESS';
export const fetchYTSuccess = ( playlist ) => ({
    type: FETCH_YT_PLAYLISTS_SUCCESS,
    playlist
});
