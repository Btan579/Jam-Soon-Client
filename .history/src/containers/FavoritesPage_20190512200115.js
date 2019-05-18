import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TopNav from "../components/TopNav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FavoriteArtists from "../components/FavoriteArtists";
import FavoriteEvents from "../components/FavoriteEvents";
import { fetchFavoriteArtists, fetchFavoriteEvents } from '../actions/favorites';
import '../styles/FavoritesPage.css';

export class FavoritesPage extends React.Component {
    componentDidMount() {
        const user_id = this.props.currentUser_id;
        console.log(user_id);
        this.props.dispatch(fetchFavoriteArtists(user_id));
        this.props.dispatch(fetchFavoriteEvents(user_id));
    }
    render() {
        if (this.props.loggedIn) {
            return <Redirect to="/" />;
        }

        const favoriteArtists = this.props.favoriteArtists.map((favoriteArtist, index) => (
            <FavoriteArtists
                key={index}
                name={favoriteArtist.name}
                playlist={favoriteArtist.playlist}
                _id={favoriteArtist._id}
                currentUser_id={favoriteArtist.currentUser_id}
            />
        ));

        const favoriteEvents = this.props.favoriteEvents.map((favoriteEvent, index) => (
            <FavoriteEvents
                key={index}
                favEventName={favoriteEvent.favEventName}
                favDate={favoriteEvent.favDate}
                favHeadliner={favoriteEvent.favHeadliner}
                favSupportingArtists={favoriteEvent.favSupportingArtists}
                favVenue={favoriteEvent.favVenue}
                favVenueLocation={favoriteEvent.favVenueLocation}
                _id={favoriteEvent._id}
                currentUser_id={favoriteEvent.currentUser_id}
            />
        ));

        return (
            <div className="favorites-page">
                <TopNav />
                <Header />
                <header>
                    <h2>My Favorites</h2>
                </header>
                <h3>Artists</h3>
                {favoriteArtists}
                <h3>Events</h3>
                {favoriteEvents}
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    favoriteArtists: state.eventsState.favoriteArtists,
    favoriteEvents: state.eventsState.favoriteEvents,
    loggedIn: state.auth.currentUser == null,
    currentUser_id: state.auth.currentUser_id,
});

export default connect(mapStateToProps)(FavoritesPage);