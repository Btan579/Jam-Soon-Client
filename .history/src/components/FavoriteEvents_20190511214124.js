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
                <h4>{this.props.favEventName}</h4>
                <h4>{this.props.favDate}</h4>
                <h4>{this.props.favHeadliner}</h4>
                <h4>{this.props.favSupportingArtists}</h4>
                <h4>{this.props.favVenue}</h4>
                <h4>{this.props.favCity}</h4>
                <h4>{this.props.favState}</h4>
                <h4>{this.props.favZip}</h4>
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