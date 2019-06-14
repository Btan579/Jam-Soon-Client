import React from 'react';
import { connect } from 'react-redux';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
export class CurrentSearchDate extends React.Component{
    

  render(){
    if (this.props.dateError === false) {
      return (
        <div className="date-search-error-cont">
          <h2> Please set a metro area</h2>
          <p>A metro area must be set before selecting a date!</p>
          <p>Select another date as there may be no events scheduled in the area yet</p>
        </div>
      );
    }
    else if (this.props.metroCode === "") {
      return (
        <h3> Select a date </h3>
      );
    }
    else {
      const currentSearchDate = this.props.currentSearchDate;
      return (
        <h3>
          Events for: {currentSearchDate}
        </h3>
      );
    }
  }
  
    
};


const mapStateToProps = state => ({
  currentSearchDate: state.eventsState.currentSearchDate,
  dateError: state.eventsState.dateError,
  metroCode: state.eventsState.metroCode
});

export default connect(mapStateToProps)(CurrentSearchDate);