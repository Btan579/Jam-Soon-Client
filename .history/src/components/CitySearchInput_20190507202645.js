import React from 'react';
import { reduxForm, Field, reset } from 'redux-form';
import Input from './input';
import { required, nonEmpty, validCity, isTrimmed } from '../validators';
import { dropDownStatesData } from '../components/ComponentData';
import { setSearchCity, fetchMetroCode } from '../actions';
export class CitySearchInput extends React.Component {
    onSubmit(values) {
        // this.event.preventDefault();
        dispatch(reset("city"));
        const countryCode = 'US';
        const stateV = this.stateVal.value;
        const cityName = values.citySearchInput;
        // console.log(countryCode, stateV, cityName);
        this.props.dispatch(setSearchCity(cityName));
        this.props.dispatch(fetchMetroCode(countryCode, stateV, cityName));
        // this.props.dispatch(setMetroSearch(countryCode, stateV, cityName));
        // return fetchMetroId(countryCode, stateV, cityName);
        // this.props.dispatch(fetchMetroCode(countryCode, stateV, cityName));
        // this.textInput.value = '';
        // const text = this.textInput.value.trim();
        // this.props.dispatch(setSearchCity(text));
        // this.textInput.value = '';
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
                <form 
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
        );
    }
}

export default reduxForm({
    form: 'city',
})(CitySearchInput);