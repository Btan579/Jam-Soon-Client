import React from 'react';
import '../styles/LandingSection.css';

export default class Home extends React.Component {
    render() {
    
        return (
            <div className="home-section">
                <section>
                    <p>[Landing page cover photo-image Jamsoon placeholder]</p>
                    <button>Discover more</button>
                </section>
                <section>
                    <header>
                        <h3>How it works</h3>
                    </header>
                    <p>[<em>Screenshot of interface with area input demo.</em>]</p>
                    <p> Start by entering a local metro area 'ie: Boston'.</p>
                    <p>By entering a date or clicking a day on the calendar you will be shown a list of concerts that happening
                on the slected day.</p>
                </section>
                <section>
                    <header>
                        <h3>Get all the details and listen</h3>
                    </header>
                    <p>[<em>placeholder for screenshot of events for a specific day</em>]</p>
                    <p>All of the events details will be listed as well as a popular playlist from the artist.</p>
                </section>
                <section>
                    <header>
                        <h3>Keep track of your progress</h3>
                    </header>
                    <p>[<em>placeholder for screenshot user favorits page</em>]</p>
                    <p>Users who are registered are able to save an artist or save an event to their account that can be viewed
                        in their favorites
                    </p>
                </section>
            </div>
            
        );
    }
}
