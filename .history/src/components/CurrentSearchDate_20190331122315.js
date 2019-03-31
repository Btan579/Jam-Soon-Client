import React from 'react';
import { connect } from 'react-redux';

// import './card.css';

export function CurrentSearchDate(props) {
    const currentSearchDate = props.currentSearchDate;
    const currentApiDate = props.currentApiDate;
    return (
        <h3>
           Events for: {currentSearchDate}
        </h3>
        <h3>
           Events for: {currentApiDate}
        </h3>
    );
};


const mapStateToProps = state => ({
  currentSearchDate: state.currentSearchDate,
  currentApiDate: state.currentApiDate
});

export default connect(mapStateToProps)(CurrentSearchDate);