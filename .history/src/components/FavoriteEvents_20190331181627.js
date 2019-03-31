import React from 'react';

import '../styles/FavoriteEvents.css';

export default function FavoriteEvents(props) {
    return (
        <div className="favorite-event">
            <h3>{props.eventName}</h3>
            <h3>{props.date}</h3>
            <h3>{props.headliner}</h3>
            <h3>{props.eventName}</h3>
            <h3>{props.suppoprtingArtists}</h3>
            <h3>{props.venue}</h3>
            <h3>{props.city}</h3>
            <h3>{props.state}</h3>
            <h3>{props.zip}</h3>
            <h3>{props.country}</h3>
            <button>Delete event</button>
        </div>
    );
};

FavoriteEvents.defaultProps = {
    eventName: "",
    date: "",
    headliner: "",
    supportingArtists: [""],
    venue: "",
    city: "",
    state: "",
    zip: "",
    country: ""
};