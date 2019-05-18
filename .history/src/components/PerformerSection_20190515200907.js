import React from 'react';
// import {landingSections}  from './ComponentData';
import '../styles/PerformerSection.css';

export default function PerformerSection(props) {
    return (
        <div className="performance-section">
            <h5>{props.artistName}</h5>
            <p>{props.artist_id}</p>
            <p>{props.billIndex}</p>
            <p>{props.billSlot}</p>
        </div>
    );
};

PerformerSection.defaultProps = {
    artistName: '',
    artist_id: '',
    billIndex: '',
    billSlot: ''
};

