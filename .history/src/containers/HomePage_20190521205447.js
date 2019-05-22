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
// import PerformerSection from '../components/PerformerSection';


import '../styles/HomePage.css';
// import PerformanceSection from '../components/PerformerSection';

export class HomePage extends React.Component {
    // displayEvents() {
       
    // }

    render() {
        if (this.props.loggedIn) {
            return <Redirect to="/" />;
        }
         const events = this.props.events.map((event, index) => (
                 <EventsSection
                    key={index}
                    eventName={event.eventName}
                    event_id={event.event_id}
                    eventDay={event.eventDay}
                    venueName={event.venueName}
                    venueLocation={event.venueLocation}
                    performingArtists={event.performingArtists}
                    

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
    loggedIn: state.auth.currentUser == null
});

export default connect(mapStateToProps)(HomePage);