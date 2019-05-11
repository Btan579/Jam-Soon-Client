import React from 'react';
import DatePicker from 'react-datepicker';
// import { SONG_KICK_KEY, SONG_KICK_BASE_URL } from '../config';
// import { dropDownStatesData } from '../components/ComponentData';
// import { reduxForm, Field } from 'redux-form';
import CitySearchInput from "./CitySearchInput";

// import Input from './input';
// import { required, nonEmpty, validCity, isTrimmed } from '../validators';
import {connect} from 'react-redux';
import '../styles/CalendarSearchSection.css';
import "react-datepicker/dist/react-datepicker.css";
import { setSearchDate, setApiDate, fetchEvents } from '../actions';

import moment from 'moment';

export class CalendarSearchSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date()
        };
        this.onSelect = this.onSelect.bind(this);
    }
   
    onSelect(date) {
        let metroCode = this.props.metroCode;
        const apiDate = moment(date).format('YYYY-MM-DD');
        this.props.dispatch(setApiDate(apiDate.toString()));
        const clientDate = moment(date).format('MMMM Do YYYY');
        this.props.dispatch(setSearchDate(clientDate.toString()));
        this.props.dispatch(fetchEvents(metroCode, apiDate));
    }
    render() {
    
        function addDays(date, days) {
            var result = new Date(date);
            result.setDate(result.getDate() + days);
            return result;
        }
        return (
            <div>
                <CitySearchInput />
                <DatePicker 
                    selected={this.state.startDate}
                    onSelect={(date) => this.onSelect(date)}
                    maxDate={addDays(new Date(), 365)}
                />       
            </div>
        );
    }
}

// export default reduxForm({
//     form: 'city',
    
// })(CalendarSearchSection);

const mapStateToProps = state => ({
    currentUser_id: state.auth.currentUser_id,   
});

export default connect(mapStateToProps)(CalendarSearchSection);