// import React from 'react';
// import { connect } from 'react-redux';
// import requiresLogin from './requires-login';
// import { fetchProtectedData } from '../actions/protected-data';

// export class CurrentUserInfo extends React.Component {
//     componentDidMount() {
//         this.props.dispatch(fetchProtectedData());
//     }

//     render() {
//         return (
//             <div className="user-info">
//                 <div className="current-username">
//                     Welcome!: {this.props.username}
//                 </div>
//             </div>
//         );
//     }
// }

// const mapStateToProps = state => {
//     return {
//         username: state.auth.currentUser.username,
//         protectedData: state.protectedData.data
//     };
// };

// export default requiresLogin()(connect(mapStateToProps)(CurrentUserInfo));