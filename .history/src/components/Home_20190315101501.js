import React from 'react';

import './Home.css';

const Home = props => (
    <section className="home-section">
    <h3>{props.heading}</h3>
    <p>{props.image}</p>
    <p>{props.text}</p>
    </section>
);

export default function Home() {
    return(
        
    );
}