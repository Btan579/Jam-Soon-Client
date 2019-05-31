import React from 'react';
import { connect } from 'react-redux';

export function CurrentSearchCity(props) {
    if (props.metroError) {
        return (
            <div className="metro-search-error-cont">
                <h2> Invalid city inputed</h2>
                <p>Please check the proper spelling and try again</p>
            </div>
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