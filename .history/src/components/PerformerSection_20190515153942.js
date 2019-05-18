import React from 'react';
// import {landingSections}  from './ComponentData';
import '../styles/Performance.css';

export default function Performance(props) {
    return (
        <section className="performance-section">
            <h5>{props.artistName}</h5>
            <p>{props.artist_id}</p>
            <p>{props.billIndex}</p>
            <p>{props.billSlot}</p>
        </section>
    );
};

Performance.defaultProps = {
    artistName: '',
    artist_id: '',
    billIndex: '',
    billSlot: ''
};

