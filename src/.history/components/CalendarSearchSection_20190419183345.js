import React from 'react';
import DatePicker from 'react-datepicker';
import StateDropDown from "../components/StateDropDown";
import {connect} from 'react-redux';
import '../styles/CalendarSearchSection.css';
import "react-datepicker/dist/react-datepicker.css";
import {setSearchCity, setSearchDate, setApiDate, setMetroSearch} from '../actions';

import moment from 'moment';

export class CalendarSearchSection extends React.Component {
  
    onSubmit(event) {
        event.preventDefault();
        const text = this.textInput.value.trim();
        const stateName = this.stateNameDropDown.value;
        this.props.dispatch(setSearchCity(text));
        this.textInput.value = '';
        console.log(stateName);
         console.log(text);
        }

    onSelect(date) {
        const apiDate = moment(date).format('YYYY-MM-DD');
        this.props.dispatch(setApiDate(apiDate.toString()));

        const clientDate = moment(date).format('MMMM Do YYYY');
        this.props.dispatch(setSearchDate(clientDate.toString()));
    }

    render() {
            const dropDownStates = this.props.dropDownStates.map((dropDownState, index) => (
            <option
            key={index}
            value={dropDownState.stateShortCode}>
            {dropDownState.stateName}
            </option>
            //  <StateDropDown 
            
            //  {...dropDownState} />
        ));
        return (
            <div>
                 <form className='event-search-input' onSubmit={(e) => this.onSubmit(e)}>
                <label htmlFor="metro-search">Search</label>
            {dropDownStates}
               

                <input placeholder='Find concerts for any city' type="text" name='metro-search' id='metro-search' 
                            ref={input => this.textInput = input}/>
                <button>Set area</button>
                </form>
                
                <DatePicker 
                    // selected={this.props.date}
                    onSelect={(date) => this.onSelect(date)}

                />     
            </div>
        );
    }
}
const mapStateToProps = state => ({
    dropDownStates: state.dropDownStates,
});
export default connect(mapStateToProps)(CalendarSearchSection);