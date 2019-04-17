import React from 'react';
import DatePicker from 'react-datepicker';
import {connect} from 'react-redux';
import '../styles/CalendarSearchSection.css';
import "react-datepicker/dist/react-datepicker.css";
import {setSearchCity, setSearchDate, setApiDate, setMetroSearch} from '../actions';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import moment from 'moment';

export class CalendarSearchSection extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             country: '',
             region: ' ',
             disabled: true
         };
     }

    selectCountry(val) {
         if (val === 'US') {
             this.setState({
                 country: val,
                 disabled: false
             });
         } else {
             this.setState({
                 country: val
             });
         }
        
    }
        
    selectRegion(val) {
        this.setState({
            region: val
        });
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
        const { country, region, disabled } = this.state;
        return (
            <div>
                 <form className='event-search-input' onSubmit={(e) => this.onSubmit(e)}>
                <label htmlFor="metro-search">Search</label>
                <CountryDropdown
                    value={country}
                     valueType="short"
                    onChange={(val) => this.selectCountry(val)} 
                    priorityOptions={["US", "CA", "GB"]} />
                <RegionDropdown
                country={country}
                value={region}
                countryValueType="short"
                valueType="short"
                onChange={(val) => this.selectRegion(val)} 
                disabled={disabled}
                />
                <input placeholder='Find concerts for any city' type="text" name='metro-search' id='metro-search' 
                            ref={input => this.textInput = input}/>
                <button>Set area</button>
                </form>
                
                <DatePicker 
                    selected={this.props.date}
                    onSelect={(date) => this.onSelect(date)}

                />     
            </div>
        );
    }
}

export default connect()(CalendarSearchSection);