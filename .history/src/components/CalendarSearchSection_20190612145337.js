import React from 'react';
import DatePicker from 'react-datepicker';
import CitySearchInput from "./CitySearchInput";
import CurrentSearchDate from "./CurrentSearchDate";
import CurrentSearchCity from "./CurrentSearchCity";
import {connect} from 'react-redux';
import '../styles/CalendarSearchSection.css';
import "react-datepicker/dist/react-datepicker.css";
import { setSearchDate, fetchEvents } from '../actions';
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
        const clientDate = moment(date).format('MMMM Do YYYY');
        // this.props.dispatch(clearEvents(ham));
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
                <CurrentSearchCity />
                <CitySearchInput />
                <CurrentSearchDate />
                <DatePicker 
                    selected={this.state.startDate}
                    onSelect={(date) => this.onSelect(date)}
                    minDate={new Date()}
                    maxDate={addDays(new Date(), 365)}
                />       
            </div>
        );
    }
}
const mapStateToProps = state => ({
    metroCode: state.eventsState.metroCode,
});
export default connect(mapStateToProps)(CalendarSearchSection);