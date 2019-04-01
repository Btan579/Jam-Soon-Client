import React from 'react';
import { connect } from 'react-redux';
import TopNav from "../components/TopNav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FavoriteArtists from "../components/FavoriteArtists";
import FavoriteEvents from "../components/FavoriteEvents";
import '../styles/FavoritesPage.css';

export class FavoritesPage extends React.Component {
    render() {
        const favoriteArtists = this.props.favoriteArtists.map((favoriteArtist, index) => (
            <FavoriteArtists
                key={index}
                name={favoriteArtist.name}
                playlist={favoriteArtist.playlist}
            />
        ));

        const favoriteEvents = this.props.favoriteEvents.map((favoriteEvent, index) => (
            <FavoriteEvents
                key={index}
                eventName={favoriteEvent.FavEventName}
                date={favoriteEvent.FavDate}
                headliner={favoriteEvent.FavHeadliner}
                supportingArtists={favoriteEvent.FavSupportingArtists}
                venue={favoriteEvent.FavVenue}
                city={favoriteEvent.FavCity}
                state={favoriteEvent.FavState}
                zip={favoriteEvent.FavZip}
                country={favoriteEvent.FavCountry}
            />
        ));

        return (
            <div className="favorites-page">
                <TopNav />
                <Header />
                <header>
                    <h3>My Favorites</h3>
                </header>
                <h4>Artists</h4>
                {favoriteArtists}
                <h4>Events</h4>
                {favoriteEvents}
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    favoriteArtists: state.favoriteArtists,
    favoriteEvents: state.favoriteEvents
});

export default connect(mapStateToProps)(FavoritesPage);