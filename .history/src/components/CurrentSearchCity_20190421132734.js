import React from 'react';
import { connect } from 'react-redux';

export function CurrentSearchCity(props) {
    const currentSearchCity = props.currentSearchCity;
    return (
        <h3>
            Looking for events in: {currentSearchCity}
        </h3>
    );
};

const mapStateToProps = state => ({
    currentSearchCity: state.eventsState.currentSearchCity
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