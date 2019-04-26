import React from 'react';
import DatePicker from 'react-datepicker';
import { dropDownStatesData } from '../components/ComponentData';
import { reduxForm, Field } from 'redux-form';
import {connect} from 'react-redux';
import '../styles/CalendarSearchSection.css';
import "react-datepicker/dist/react-datepicker.css";
import {setSearchCity, setSearchDate, setApiDate} from '../actions';

import moment from 'moment';

export class CalendarSearchSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date()
        };
        this.onSelect = this.onSelect.bind(this);
    }
    onSubmit(event) {
        event.preventDefault();
        const text = this.textInput.value.trim();
        this.props.dispatch(setSearchCity(text));
        this.textInput.value = '';
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
        return (
            <div>
                <form className='event-search-input' onSubmit={(e) => this.onSubmit(e)}>
                    <label htmlFor="metro-search">Search</label>
                        <select className="stateDropD" 
                            ref={selected => this.stateVal = selected}>
                        {dropDownStates}
                        </select>
                        <Field name="citySearchInput" id="citySearchInput" type="text" component="input"/>
                        <input placeholder='Find concerts for any city' type="text" name='metro-search' id='metro-search' 
                            ref={input => this.textInput = input}/>
                        <button>Set area</button>
                </form>
                <DatePicker 
                    selected={this.state.startDate}
                    onSelect={(date) => this.onSelect(date)}
                />     
            </div>
        );
    }
}
export default connect()(CalendarSearchSection);