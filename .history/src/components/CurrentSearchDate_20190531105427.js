import React from 'react';
import { connect } from 'react-redux';

export function CurrentSearchDate(props) {
    
   
  if (props.dateError) {
    return (
      <div className="date-search-error-cont">
        <h2> Invalid city inputed</h2>
        <p>Please check the proper spelling or choose the correct state and try again</p>
        <p>A proper metro area will display when a valid city is selected</p>
      </div>
    );
  } else if (props.currentSearchDate === "") {
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
  dateError: state.eventsState.dateError
});

export default connect(mapStateToProps)(CurrentSearchDate);