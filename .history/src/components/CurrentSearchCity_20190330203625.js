import React from 'react';
import { connect } from 'react-redux';

// import './card.css';

export function CurrentSearchCity(props) {
    const currentSearchCity = props.currentSearchCity;
    return (
        <h3>
            Looking for events in: {searchCity}
        </h3>
    );
};


const mapStateToProps = state => ({
  currentSearchCity: state.currentSearchCity
});

export default connect(mapStateToProps)(CurrentSearchCity);