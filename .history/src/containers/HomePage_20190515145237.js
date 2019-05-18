import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TopNav from "../components/TopNav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CalendarSearchSection from "../components/CalendarSearchSection";
import EventsSection from "../components/EventsSection";
import CurrentSearchCity from "../components/CurrentSearchCity";
import CurrentSearchDate from "../components/CurrentSearchDate";
// import Performance from '../components/Performance';


import '../styles/HomePage.css';

export class HomePage extends React.Component {
    render() {
        if (this.props.loggedIn) {
            return <Redirect to="/" />;
        }
         const perfomers = this.props.events.map((event, index) => (
            event.performingArtists.map(function(performer) {
               return console.log(performer.artistName);
            })
         ));

         const events = this.props.events.map((event, index) => (
        
            <EventsSection 
            key={index}
            eventName={event.eventName}
            headliner={event.headliner}
            headliner_id={event.headliner_id}
            performingartists={event.performingArtists[0].artistName}
            headlinerPlaylist={event.headlinerPlaylist}
            secondArtist={event.secondArtist}
            secondArtist_id={event.secondArtist_id}
            event_id={event.event_id}
            secondArtistPlaylist={event.secondArtistPlaylist}
            eventDay={event.eventDay}
            venueName={event.venueName}
            venueLocation={event.venueLocation}
            />
        ));
            
        return (
            <div className="home-page">
                <TopNav username="username"/>
                <Header />
                <h3>Find some shows</h3>
                <CurrentSearchCity />
                <CalendarSearchSection 
                />
                <CurrentSearchDate />
                {perfomers}
                {events}
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    events: state.eventsState.events,
    loggedIn: state.auth.currentUser == null
});

export default connect(mapStateToProps)(HomePage);