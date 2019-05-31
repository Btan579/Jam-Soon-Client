import React from 'react';
import { connect } from 'react-redux';

export function CurrentSearchDate(props) {
    
   
  if (props.dateError === false) {
    return (
      <div className="date-search-error-cont">
        <h2> Invalid date inputed</h2>
        <p>Please input a date from today onward </p>
        <p>A metro area must be set before selecting a date!</p>
      </div>
    );
  } 
  // if (props.metroCode) {
  //   return (
  //     <div className="date-search-error-cont">
  //       <h2> Invalid date inputed</h2>
  //       <p>A metro area must be set before selecting a date!</p>
  //     </div>
  //   );

  // } 
  else if (props.currentSearchDate === "") {
    return (
      <h3> Select a date </h3>
    );
  }
  else {
    const currentSearchDate = props.currentSearchDate;
    return (
      <h3>
        Events for: {currentSearchDate}
      </h3>
    );
  }
    
};


const mapStateToProps = state => ({
  currentSearchDate: state.eventsState.currentSearchDate,
  dateError: state.eventsState.dateError,
  metroCode: state.eventsState.metroCode
});

export default connect(mapStateToProps)(CurrentSearchDate);