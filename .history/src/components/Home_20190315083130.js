import React from 'react';

import './Home.css';

const Home = props => (
    <section className="home-section">
    <h1>{props.heading}</h1>
    <p>{props.image}</p>
    <p>{props.text}</p>
    </section>
);