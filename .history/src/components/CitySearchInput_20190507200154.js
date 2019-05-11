import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from './input';
import { required, nonEmpty, validCity, isTrimmed } from '../validators';

export class CitySearchInput extends React.Component {

    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default reduxForm({
    form: 'city',
})(CitySearchInput);