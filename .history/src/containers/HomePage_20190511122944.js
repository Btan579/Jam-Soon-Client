import React from 'react';
import { connect } from 'react-redux';
import TopNav from "../components/TopNav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CalendarSearchSection from "../components/CalendarSearchSection";
import EventsSection from "../components/EventsSection";
import CurrentSearchCity from "../components/CurrentSearchCity";
import CurrentSearchDate from "../components/CurrentSearchDate";


import '../styles/HomePage.css';

export class HomePage extends React.Component {
   
    render() {
         const events = this.props.events.map((event, index) => (
            <EventsSection 
            key={index}
            eventName={event.eventName}
            headliner={event.headliner}
            data-headliner_id={event.headliner_id}
            headlinerPlaylist={event.headlinerPlaylist}
            secondArtist={event.secondArtist}
            data-second-artist_id={event.secondArtist_id}
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
                {events}
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    events: state.eventsState.events,
});

export default connect(mapStateToProps)(HomePage);