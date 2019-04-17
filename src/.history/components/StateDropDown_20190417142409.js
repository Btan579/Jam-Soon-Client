import React from 'react';

import '../styles/StateDropDown.css';


export default function StateDropDown(props) {
    return (
        <select className="state-drop-down">
            <option value={props.stateShortCode}>{props.stateName}</option>
        </select>
    );
};

StateDropDown.defaultProps = {
    stateShortCode: '',
    stateName: '',
};

