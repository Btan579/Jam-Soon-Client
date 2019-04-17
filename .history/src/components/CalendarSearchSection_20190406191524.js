import React from 'react';
import DatePicker from 'react-datepicker';
import {connect} from 'react-redux';
import '../styles/CalendarSearchSection.css';
import "react-datepicker/dist/react-datepicker.css";
import {setSearchCity, setSearchDate, setApiDate} from '../actions';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import moment from 'moment';

export class CalendarSearchSection extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             country: '',
             region: ' '
         };
     }

    selectCountry(val) {
        this.setState({
            country: val
        });
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
        const { country, region } = this.state;
        return (
            <div>
                 <form className='event-search-input' onSubmit={(e) => this.onSubmit(e)}>
                <label htmlFor="metro-search">Search</label>
                <input placeholder='Find concerts for any city' type="text" name='metro-search' id='metro-search' 
                            ref={input => this.textInput = input}/>
                <button>Set area</button>
                </form>
                <CountryDropdown
                    value={country}
                    onChange={(val) => this.selectCountry(val)} />
                <RegionDropdown
                country={country}
                value={region}
                onChange={(val) => this.selectRegion(val)} />
                <DatePicker 
                    selected={this.props.date}
                    onSelect={(date) => this.onSelect(date)}

                />     
            </div>
        );
    }
}

export default connect()(CalendarSearchSection);