import React from 'react';
import { connect } from 'react-redux';

export function CurrentSearchCity(props) {
    if (props.metroError) {
        return (
            
            <div className="metro-search-error-cont">
                <h3> Invalid city entered</h3>
                <p>Please check the proper spelling or choose the correct state and try again</p>
                <p>A proper metro area will display when a valid city is selected</p>
            </div>
        );
    } else if (props.currentSearchCity === ""){
        return (
        <h3> Search a city to set a metro area to look for events in</h3>
        );
    }
    else { 
        const currentSearchCity = props.currentSearchCity;
        return (
            <h3>
                Looking for events in: {currentSearchCity}
            </h3>
        );
    }
   
};

const mapStateToProps = state => ({
    currentSearchCity: state.eventsState.currentSearchCity, 
    metroError: state.eventsState.metroError
});

export default connect(mapStateToProps)(CurrentSearchCity);