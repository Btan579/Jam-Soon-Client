import React from 'react';
import DatePicker from 'react-datepicker';
import { dropDownStatesData } from '../components/ComponentData';
import { reduxForm, Field } from 'redux-form';
import Input from './input';
import { required, nonEmpty, validCity, isTrimmed } from '../validators';
// import {connect} from 'react-redux';
import '../styles/CalendarSearchSection.css';
import "react-datepicker/dist/react-datepicker.css";
import {setSearchCity, setSearchDate, setApiDate, setMetroSearch} from '../actions';

import moment from 'moment';

export class CalendarSearchSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date()
        };
        this.onSelect = this.onSelect.bind(this);
    }
    componentDidMount() {
        const cityName = this.textInput.value;
        const countryCode = 'US';
        const stateV = this.stateVal.value;
        this.props.dispatch(fetchBoard(countryCode, stateV, cityName));
    }
    onSubmit(values) {
        // event.preventDefault();
        
        const countryCode = 'US';
        const stateV = this.stateVal.value;
        const cityName = values.citySearchInput;
        console.log(countryCode, stateV, cityName);
        this.props.dispatch(setSearchCity(cityName));
        this.props.dispatch(setMetroSearch(countryCode, stateV, cityName));
        // this.textInput.value = '';
        // const text = this.textInput.value.trim();
        // this.props.dispatch(setSearchCity(text));
        // this.textInput.value = '';
        }

    onSelect(date) {
        const apiDate = moment(date).format('YYYY-MM-DD');
        this.props.dispatch(setApiDate(apiDate.toString()));
        const clientDate = moment(date).format('MMMM Do YYYY');
        this.props.dispatch(setSearchDate(clientDate.toString()));
    }
    render() {
        const dropDownStates = dropDownStatesData.map((dropDownState, index) => (
            <option key={index}
                value={dropDownState.stateShortCode}
            >
                {dropDownState.stateName}
            </option>
        ));
        function addDays(date, days) {
            var result = new Date(date);
            result.setDate(result.getDate() + days);
            return result;
        }
        return (
            <div>
                <form  
                // onSubmit={(e) => this.onSubmit(e)}>
                    onSubmit={this.props.handleSubmit((values) => this.onSubmit(values))}>
                    <label htmlFor="metro-search">Search</label>
                        <select className="stateDropD" 
                            ref={selected => this.stateVal = selected}>
                        {dropDownStates}
                        </select>
                    <Field 
                        name="citySearchInput" 
                        id="citySearchInput" 
                        type="text" 
                        component={Input} 
                        placeholder='Find concerts for any city'
                        validate={[required, nonEmpty, validCity, isTrimmed]}
                        ref={input => this.textInput = input}
                        />
                        {/* <input placeholder='Find concerts for any city' type="text" name='metro-search' id='metro-search' 
                            ref={input => this.textInput = input}/> */}
                        <button>Set area</button>
                </form>
                <DatePicker 
                    selected={this.state.startDate}
                    onSelect={(date) => this.onSelect(date)}
                    maxDate={addDays(new Date(), 365)}
                />     
                
            </div>
        );
    }
}
// export default connect()(CalendarSearchSection);
export default reduxForm({
    form: 'city'
})(CalendarSearchSection);