import React from 'react';

import '../styles/FavoriteEvents.css';

export default function FavoriteEvents(props) {
    return (
        <div className="favorite-event">
            <h3>{props.favEventName}</h3>
            <h3>{props.favDate}</h3>
            <h3>{props.favHeadliner}</h3>
            <h3>{props.favSupportingArtists}</h3>
            <h3>{props.favVenue}</h3>
            <h3>{props.favCity}</h3>
            <h3>{props.favState}</h3>
            <h3>{props.favZip}</h3>
            <button>Delete event</button>
        </div>
    );
};

FavoriteEvents.defaultProps = {
    favEventName: "",
    favDate: "",
    favHeadliner: "",
    favSupportingArtists: [""],
    favVenue: "",
    favCity: "",
    favState: "",
    favZip: "",
};