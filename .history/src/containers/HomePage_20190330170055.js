import React from 'react';
import { connect } from 'react-redux';
import TopNav from "../components/TopNav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CalendarSearchSection from "../components/CalendarSearchSection";
import EventsSection from "../components/EventsSection";
// import DatePicker from 'react-date-picker';
import {setSearchCity} from '../actions';
import '../styles/HomePage.css';

export class HomePage extends React.Component {
        setsearchCity(currentSearchCity) {
        this.props.dispatch(setSearchCity(currentSearchCity));
    }
    render() {
        const currentSearchCity = this.props.currentSearchCity;
        const currentSearchDate = this.props.currentSearchDate;
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
                <TopNav username="username"/>
                <Header />
                <h3>Looking for events in:{currentSearchCity}</h3>
                <h3>Find some shows</h3>
                <CalendarSearchSection />
                <h3>Events for {currentSearchDate}</h3>
                {events}
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    events: state.events,
    currentSearchCity: state.currentSearchCity,
    currentSearchDate: state.currentSearchDate
});

export default connect(mapStateToProps)(HomePage);