import React from 'react';
import '../styles/StateDropDown.css';

export default function StateDropDown(props) {  
    return ( 
        <div className = "stateNameDropDown"> 
            {props.stateShortCode}
            {props.stateName}
        </div>
    );
    
};
StateDropDown.defaultProps = {
    stateShortCode: '',
    stateName: '',
};
