import React from 'react';

import '../styles/FavoriteEvents.css';

export default function FavoriteEvents(props) {
    return (
        <div className="favorite-event">
            <h3>{props.FavEventName}</h3>
            <h3>{props.FavDate}</h3>
            <h3>{props.FavHeadliner}</h3>
            <h3>{props.FavSupportingArtists}</h3>
            <h3>{props.FavVenue}</h3>
            <h3>{props.FavCity}</h3>
            <h3>{props.FavState}</h3>
            <h3>{props.FavZip}</h3>
            <h3>{props.FavCountry}</h3>
            <button>Delete event</button>
        </div>
    );
};

FavoriteEvents.defaultProps = {
    FavEventName: "",
    FavDate: "",
    FavHeadliner: "",
    FavSupportingArtists: [""],
    FavVenue: "",
    FavCity: "",
    FavState: "",
    FavZip: "",
    FavCountry: ""
};