import React from 'react';
import { connect } from 'react-redux';
import './Favorites.css';

export class Favorites extends React.Component {
    render() {
        const MockFavorites = this.props.MockFavorites;
        return (
            <div className="favorites-section">
                <header>
                    <h3>My Favorites</h3>
                </header>
                <div className="favorites-cont">
                    <div className="favorite-artists-cont">
                        <header>
                            <h2>Artists</h2>
                        </header>
                        <div className="favorite-artist-cont">
                            <h3>{MockFavorites.favoriteArtists.artist.name}</h3>
                            <p>[playlist placeholder] {MockFavorites.favoriteArtists.artist.playlist}</p>
                            <button>Delete</button>
                        </div>
                    </div>
                    <div className="favorite-events-cont">
                        <header>
                            <h2>Events</h2>
                        </header>
                        <h3>{MockFavorites.favoriteEvents.event.eventName}</h3>
                        <h3>Artists: {MockFavorites.favoriteEvents.event.artists}</h3>
                        <div className="favorite-event-cont">
                            <h3>Venue</h3>
                            <h4>{MockFavorites.favoriteEvents.event.venue}
                            </h4>
                            <h4>Date: {MockFavorites.favoriteEvents.event.date}</h4>
                            <h4>City: {MockFavorites.favoriteEvents.event.city}</h4>
                            <h4>Zip: {MockFavorites.favoriteEvents.event.zip}</h4>
                            <h4>State: : {MockFavorites.favoriteEvents.event.state}</h4>
                            <h4>Country: {MockFavorites.favoriteEvents.event.country}</h4>
                        </div>
                        <button>Delete</button>
                    </div>
                    </div>
            </div>
            
            
        );
    }
}

const mapStateToProps = state => ({
    MockFavorites: state.MockFavorites
});

export default connect(mapStateToProps)(Favorites);