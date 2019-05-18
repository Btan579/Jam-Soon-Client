import React from 'react';
import { connect } from 'react-redux';
import '../styles/FavoriteEvents.css';

export class FavoriteEvents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favEventName: "",
            favDate: "",
            favHeadliner: "",
            favSupportingArtists: [""],
            favVenue: "",
            favCity: "",
            favState: "",
            favZip: "",
            event_id: "",
            _id: ''
        };
    }
    render() {
        return (
            <div className="favorite-event"
                data-_id={this.props._id}
                data-user={this.props.currentUser_id}
            >
                <h3>{this.props.favEventName}</h3>
                <h3>{this.props.favDate}</h3>
                <h3>{this.props.favHeadliner}</h3>
                <h3>{this.props.favSupportingArtists}</h3>
                <h3>{this.props.favVenue}</h3>
                <h3>{this.props.favCity}</h3>
                <h3>{this.props.favState}</h3>
                <h3>{this.props.favZip}</h3>
                <button>Delete event</button>
            </div>
        );
    };
}
    

const mapStateToProps = state => ({
    currentUser_id: state.auth.currentUser_id,
});


export default connect(mapStateToProps)(FavoriteEvents);

// FavoriteEvents.defaultProps = {
//     favEventName: "",
//     favDate: "",
//     favHeadliner: "",
//     favSupportingArtists: [""],
//     favVenue: "",
//     favCity: "",
//     favState: "",
//     favZip: "",
// };