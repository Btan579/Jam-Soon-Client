import { API_BASE_URL, SONG_KICK_KEY } from '../config';

const songKickBaseUrl = 'https://api.songkick.com/api/3.0/search/locations.json?query={search_query}&apikey={your_api_key}'


export const FETCH_METRO_CODE_SUCCESS = 'FETCH_METRO_CODE_SUCCESS';
export const fetchMetroCodeSuccess = metroSearch => ({
    type: FETCH_METRO_CODE_SUCCESS,
    metroCode
});

export const fetchMetroCode = (countryCode, stateName, cityName) => dispatch => {
    fetch(`${songKickBaseUrl}${cityName},${stateName},${countryCode}&apikey=${SONG_KICK_KEY}`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            console.log(res.json());
            return res.json();
            // console.log(res.json());
            // resultsPage.results.location;
        })
        .then(metroCode => {
            dispatch(fetchMetroCodeSuccess(metroCode));
        });
};

