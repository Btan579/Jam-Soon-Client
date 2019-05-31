import React from 'react';
import { connect } from 'react-redux';

export function CurrentSearchCity(props) {
    if (this.props.metroError) {
        return (
            <h1> ERROOR ERRORORORORO RORORORORO ORREO EERROROR</h1>
        );
    } else { 
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


// export function CurrentSearchCity(props) {
//     const currentSearchCity = props.currentSearchCity;
//     return (
//         <h3>
//             Looking for events in: {props.currentSearchCity}
//         </h3>
//     );
// };

// CurrentSearchCity.defaultProps = {
//     currentSearchCity: ''
// };