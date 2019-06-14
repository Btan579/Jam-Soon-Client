import React from 'react';
import { reduxForm, Field, reset } from 'redux-form';
import Input from './input';
import { required, nonEmpty, validCity, isTrimmed } from '../validators';
import { dropDownStatesData } from '../components/ComponentData';
import { fetchMetroCode } from '../actions';

export class CitySearchInput extends React.Component {
    onSubmit(values) {
        // this.event.preventDefault();
        this.props.dispatch(reset("city"));
        const countryCode = 'US';
        const stateV = this.stateVal.value;
        const cityName = values.citySearchInput;
        this.props.dispatch(fetchMetroCode(countryCode, stateV, cityName));
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
                <h4>Search</h4>
                <form id="city-search-form"
                    onSubmit={this.props.handleSubmit((values) => this.onSubmit(values))}>
                    <label htmlFor="metro-search">State</label>
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
                    <button>Set area</button>
                </form>
        );
    }
}

export default reduxForm({
    form: 'city',
})(CitySearchInput);