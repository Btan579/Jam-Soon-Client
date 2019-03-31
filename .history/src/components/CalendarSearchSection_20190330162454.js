import React from 'react';
import DatePicker from 'react-date-picker';
import {connect} from 'react-redux';
import '../styles/CalendarSearchSection.css';
import {setSearchCity} from '../actions';

export class CalendarSearchSection extends React.Component {
      onSubmit(event) {
        event.preventDefault();
        const text = this.textInput.value.trim();
        if (text && this.props.onSearchCity) {
            this.props.onSearchCity(text);
            console.log(text);
        }
        this.textInput.value = '';
    }
        setSearchCity(currentSearchCity) {
            this.props.dispatch(setSearchCity(currentSearchCity));
        }

    render() {
            const currentSearchCity = this.props.currentSearchCity;
            const currentSearchDate = this.props.currentSearchDate;
        return (
            <div className="search-section">
            <form className='event-search-input' onSubmit={(e) => this.onSubmit(e)}>
                <label htmlFor="metro-search">Search</label>
                <input placeholder='Find concerts for any city' type="text" name='metro-search' id='metro-search' 
                            ref={input => this.textInput = input}/>
                <button>Set area</button>
                <DatePicker />     
            </form>
            <h3>Looking for events in:{currentSearchCity}</h3>
            <h3>Events for {currentSearchDate}</h3>
            </div>
            
        );
    }
}


const mapStateToProps = state => ({
    currentSearchCity: state.currentSearchCity,
    currentSearchDate: state.currentSearchDate
});

export default connect(mapStateToProps)(CalendarSearchSection);