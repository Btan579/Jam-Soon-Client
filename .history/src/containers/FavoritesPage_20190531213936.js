import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TopNav from "../components/TopNav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FavoriteArtists from "../components/FavoriteArtists";
import FavoriteEvents from "../components/FavoriteEvents";
import { toast } from 'react-toastify';
import { fetchFavoriteArtists, fetchFavoriteEvents, clearFavorites } from '../actions/favorites';
import '../styles/FavoritesPage.css';

export class FavoritesPage extends React.Component {
    componentDidMount() {
        const user_id = this.props.currentUser_id;
        this.props.dispatch(clearFavorites());
        this.props.dispatch(fetchFavoriteArtists(user_id));
        this.props.dispatch(fetchFavoriteEvents(user_id));
        if (this.props.loggedIn) {
            toast.info("Loading favorites...", {
                autoClose: 3000,
                hideProgressBar: false,
            });
        }
      
    }
    componentWillUnmount() {
        this.props.dispatch(clearFavorites());
    }
    render() {
        if (this.props.loggedIn) {
            return <Redirect to="/" />;
        }
        const favoriteArtists = this.props.favoriteArtists.map((favoriteArtist, index) => (
            <FavoriteArtists
                key={index}
                favArtistName={favoriteArtist.favArtistName}
                video_id={favoriteArtist.video_id}
                _id={favoriteArtist._id}
                currentUser_id={favoriteArtist.currentUser_id}
                artist_id={favoriteArtist.artist_id}
            />
        ));
        return (
            <div className="favorites-page">
                <TopNav />
                <Header />
                <header>
                    <h1>My Favorites</h1>
                </header>
                <h2>Artists</h2>
                {favoriteArtists}
                <h2>Events</h2>
                <FavoriteEvents />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    favoriteArtists: state.favorites.favoriteArtists,
    favoriteEvents: state.favorites.favoriteEvents,
    loggedIn: state.auth.currentUser == null,
    currentUser_id: state.auth.currentUser_id,
});

export default connect(mapStateToProps)(FavoritesPage);