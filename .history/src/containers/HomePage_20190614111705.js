import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import TopNav from "../components/TopNav";
// import Header from "../components/Header";
import TopMenu from "../components/topMenu";
import Footer from "../components/Footer";
import CalendarSearchSection from "../components/CalendarSearchSection";
import EventsSection from "../components/EventsSection";
// import CurrentSearchCity from "../components/CurrentSearchCity";
// import CurrentSearchDate from "../components/CurrentSearchDate";
import '../styles/HomePage.css';


export class HomePage extends React.Component {
    
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
        // console.log(this.props.loggedIn);
        return (
            <div className="home-page">
                <TopMenu />
                <h2>Find some shows</h2>
                <hr id="search-hr"></hr>
                <CalendarSearchSection />
                {events}
                <Footer />
            </div>
            
        );
    }
}

const mapStateToProps = state => ({
    events: state.eventsState.events,
    loggedIn: state.auth.currentUser == null,
    
});

export default connect(mapStateToProps)(HomePage);