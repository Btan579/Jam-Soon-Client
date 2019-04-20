import React from 'react';
import { connect } from "react-redux";
import '../styles/StateDropDown.css';


export class StateDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stateShortCode: '',
            stateName: '',
        };
    }

    render(){
        const dropDownStates = this.props.dropDownStates.map((dropDownState, index) => (
            <option
            key={index}
            ref={dropDownState}
            value={dropDownState.stateShortCode}>
            {dropDownState.stateName}
            </option>
        ));
        return (
            <select className="stateNameDropDown">
            {dropDownStates}
            </select>
        );
    }
};

const mapStateToProps = state => ({
    dropDownStates: state.dropDownStates
});

export default connect(mapStateToProps)(StateDropDown);