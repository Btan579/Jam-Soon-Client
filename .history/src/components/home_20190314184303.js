import React from 'react';
import TopNav from './top-nav';
import Login from './login';
import Register from './register';
import Events from './events';
import Favorites from './favorites';

import './board.css';

export default function Home() {
    return (
        <div className="board">
            <h2>Example board</h2>
            <ul className="lists">
                <li className="list-wrapper">
                  <List />
                </li>
                <li className="list-wrapper">
                  <List />
                </li>
                <li className="list-wrapper">
                  <List />
                </li>
            </ul>
        </div>
    );
}