import React from 'react';
import { connect } from 'react-redux';
import TopNav from "../components/TopNav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CalendarSearchSection from "../components/CalendarSearchSection";
import EventsSection from "../components/EventsSection";

import '../styles/HomePage.css';

export class HomePage extends React.Component {
   
    
    render() {
         const events = this.props.events.map((event, index) => (
            <EventsSection 
            key={index}
            eventName={event.eventName}
            headliner={event.headliner}
            headlinerPlaylist={event.headlinerPlaylist}
            secondArtist={event.secondArtist}
            secondArtistPlaylist={event.secondArtistPlaylist}
            venueName={event.venueName}
            venueAddress={event.venueAddress}
            venueCity={event.venueCity}
            venueZip={event.venueZip}
            venueState={event.venueState}
            venueCountry={event.venueCountry}
            venueWesbite={event.venueWesbite}
            venuePhone={event.venuePhone}
            venueDescription={event.venueDescription}
            />
        ));

        return (
            <div className="home-page">
                <TopNav />
                <Header />
                <CalendarSearchSection />
                {events}
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    events: state.events
});

export default connect(mapStateToProps)(HomePage);