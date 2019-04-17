import React from 'react';
import { connect } from "react-redux";
import '../styles/StateDropDown.css';


export default class StateDropDown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stateShortCode: '',
            stateName: '',
        };
    }

    render(){
        return (
        <select className="state-drop-down">
        {dropDownStates}
        </select>
        );
    }
    return (
       
    );
};



  const dropDownStates = this.props.dropDownStates.map((dropDownState, index) => (
            <option
            key={index}
            value={dropDownState.stateShortCode}
           >{dropDownState.stateName}
            </option>
        ));


const mapStateToProps = state => ({
    dropDownStates: state.dropDownStates
});

export default connect(mapStateToProps)(StateDropDown);