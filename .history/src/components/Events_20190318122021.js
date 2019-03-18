import React from 'react';

import './Events.css';

export default class Events extends React.Component {
   
    
    render() {
         const MockEvent = {
            eventDay: "October 31st 2020",
            Event: {
                eventName: "Monster Mash: Featuring No Doubt",
                artists: {
                    firstArtist: "No Doubt",
                    secondArtist: "Smashmouth",
                },
                venue: {
                    venueName: "Club60",
                    venueAddress: "123 Main St.",
                    venueCity: "Boston",
                    venueZip: "02110",
                    venueState: "MA",
                    venueCountry: "USA",
                    venueWesbite: "www.club60.com",
                    venuePhone: "781-888-444",
                    venueDescription: "First opened in 1962, Club 60 is a diamond in the rough"
                }
            }
 
         };

        return (
            <div className="event-section">
                <header>
                <h3>Events for <em>{MockEvent.eventDay}</em></h3>
                </header>
                <div className="event-list">
                <div className="single-event">
                    <header>
                        <h2>Event Name</h2>
                    </header>
                    <h3>Artists</h3>
                    <div className="first-artist-cont">
                        <h4>Headlining artist</h4>
                        <p>[<em>Playlist of headliner</em>]</p>
                        <button>Favorite</button>
                    </div>
                    <div className="second-artist-cont">
                        <h4>Second artist</h4>
                        <p>[<em>Playlist of headliner</em>]</p>
                        <button>Favorite</button>
                    </div>
                    <div className="venue-cont">
                        <h3>Venue</h3>
                        <h4>Venue name</h4>
                        <h4>Address</h4>
                        <h4>City</h4>
                        <h4>Zip</h4>
                        <h4>State</h4>
                        <h4>Country</h4>
                        <h4>Website</h4>
                        <h4>Phone</h4>
                        <h4>Description</h4>
                    </div>
                    <button>Favorite</button>
                </div>
                </div>
            </div>
        );
    }
}