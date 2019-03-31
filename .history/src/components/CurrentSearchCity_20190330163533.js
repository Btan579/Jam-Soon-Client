import React from 'react';

// import './card.css';

export default function CurrentSearchCity(props) {
    return (
        <h3>
             {props.currentSearchCity}
        </h3>
    );
};

CurrentSearchCity.defaultProps = {
    currentSearchCity: ''
};