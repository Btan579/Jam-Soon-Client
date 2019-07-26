import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TopMenu from "../components/topMenu";
import Footer from "../components/Footer";
import FavoriteArtists from "../components/FavoriteArtists";
import FavoriteEvents from "../components/FavoriteEvents";
import { fetchFavoriteArtists, fetchFavoriteEvents, clearFavorites, deleteFavoriteArtist } from '../actions/favorites';
import '../styles/FavoritesPage.css';

export class FavoritesPage extends React.Component {
    componentDidMount() {
        const user_id = this.props.currentUser_id;
        this.props.dispatch(clearFavorites());
        this.props.dispatch(fetchFavoriteArtists(user_id));
        this.props.dispatch(fetchFavoriteEvents(user_id));
    }
    componentWillUnmount() {
        this.props.dispatch(clearFavorites());
    }
    // onclick(e){
    //     e.preventDefault();
    //     console.log("on clicked");
    // }
    deleteArtist(e, id) {
        
        // this.props.dispatch(deleteFavoriteArtist(_id));
        console.log("delete clicked");
        console.log(id);
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
                onclick={(e, id) => this.deleteArtist(e, id)}
            />
        ));
        return (
            <div className="favorites-page">
                <TopMenu />
                <header>
                    <h1>My Favorites</h1>
                    <hr id="fav-main-hr"></hr>
                </header>
                <h2>Artists</h2>
                <hr className="fav-header-hr"></hr>
                {favoriteArtists}
                <hr id="fav-artists-hr"></hr>
                <h2>Events</h2>
                <hr className="fav-header-hr"></hr>
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