import React from 'react';
import { connect } from 'react-redux';

// import './card.css';

export function CurrentSearchDate(props) {
    const currentSearchDate = props.currentSearchDate;
    return (
        <h3>
           Events for: {currentSearchDate}
        </h3>
    );
};


const mapStateToProps = state => ({
  currentSearchDate: state.currentSearchDate
});

export default connect(mapStateToProps)(CurrentSearchDate);