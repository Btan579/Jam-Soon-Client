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
        const displayEvents = this.props.displayEvents.map((displayEvent, index) => (
            <EventsSection 
            key={index}
            eventName={displayEvent.eventName}
            headliner={displayEvent.headliner}
            headlinerPlaylist={displayEvent.headlinerPlaylist}
            secondArtist={displayEvent.secondArtist}
            secondArtistPlaylist={displayEvent.secondArtistPlaylist}
            eventDay={displayEvent.eventDay}
            venueName={displayEvent.venueName}
            venueAddress={displayEvent.venueAddress}
            venueCity={displayEvent.venueCity}
            venueZip={displayEvent.venueZip}
            venueState={displayEvent.venueState}
            venueCountry={displayEvent.venueCountry}
            venueWesbite={displayEvent.venueWesbite}
            venuePhone={displayEvent.venuePhone}
            venueDescription={displayEvent.venueDescription}
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
                {displayEvents}
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    displayEvents: state.displayEvents,
});

export default connect(mapStateToProps)(HomePage);