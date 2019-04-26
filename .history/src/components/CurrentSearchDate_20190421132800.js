import React from 'react';
import { connect } from 'react-redux';

export function CurrentSearchDate(props) {
    const currentSearchDate = props.currentSearchDate;
   
    return (
        <h3>
           Events for: {currentSearchDate}
        </h3>
    );
};


const mapStateToProps = state => ({
  currentSearchDate: state.eventsState.currentSearchDate,
});

export default connect(mapStateToProps)(CurrentSearchDate);