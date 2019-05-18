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
import PerformanceSection from '../components/PerformerSection';

export class HomePage extends React.Component {
    // displayEvents() {
       
    // }

    render() {
        if (this.props.loggedIn) {
            return <Redirect to="/" />;
        }
        //  const perfomers = this.props.events.map((event, index) => (
        //      event.performingArtists.map(function (performer, index) {
        //         key={index}
        //         artistName
        //      })
        //  ));

        // const performers = this.props.events.map((event, index) => (
            
        //     event.performingArtists.map(function (performer) {
        //         <PerformerSection
        //             key={index}
        //             artistName={performer.artistName}
        //             artist_id={performer.artist_id}
        //             billIndex={performer.billIndex}
        //             billSlot={performer.billSlot}
        //         />
        //     })
        // ));


      
         const events = this.props.events;
        //  const events = this.props.events.map((event, index) => (

        //          <EventsSection
                    
        //              key={index}
        //              eventName={event.eventName}
        //              // headliner={event.headliner}
                     
        //              // headliner_id={event.headliner_id}

        //              // headlinerPlaylist={event.headlinerPlaylist}
        //              // secondArtist={event.secondArtist}
        //              // secondArtist_id={event.secondArtist_id}
        //             //  performers-section={
        //             //      event.performingArtists.map(function (performer, index) {
        //             //         key={index}
        //             //         artistName={performer.artistName}
        //             //         artist_id={performer.artist_id}
        //             //         billIndex={performer.billIndex}
        //             //         billSlot={performer.billSlot}
        //             //      })
        //             //  }
        //               // secondArtistPlaylist={event.secondArtistPlaylist}
                     
        //          />
            
        // ));
            
        return (
            <div className="home-page">
                <TopNav username="username"/>
                <Header />
                <h3>Find some shows</h3>
                <CurrentSearchCity />
                <CalendarSearchSection 
                />
                <CurrentSearchDate />
                <div className="events-cont-cont">
                    events.map(({evnt}) => (
        <React.Fragment>
                        <EventsSection>
                            {evnt}
                        </EventsSection>

                        {evnt.performingArtists.map((performer) =>
                            <EventsSection>
                                {performer.artistName}  | {performer.artist_id} | {performer.billIndex} | {performer.billSlot}
                            </EventsSection>
                        )}
                    </React.Fragment>
    ))
                }
                </div>
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