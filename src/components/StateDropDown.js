import React from 'react';
// import { connect } from "react-redux";
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
// export default class StateDropDown extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             stateShortCode: '',
//             stateName: '',
//         };
//     }

//     render(){
//         // const dropDownStates = this.props.dropDownStates.map((dropDownState, index) => (
//         //     <option
//         //     key={index}
            
//         //     value={dropDownState.stateShortCode}>
//         //     {dropDownState.stateName}
//         //     </option>
//         // ));
//         return (
//             <select className="stateNameDropDown">
//             {props.stateName}
//             {props.stateShortCode}
//             </select>
//         );
//     }
// };

// const mapStateToProps = state => ({
//     dropDownStates: state.dropDownStates
// });

// export default connect(mapStateToProps)(StateDropDown);