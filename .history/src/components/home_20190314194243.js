import React from 'react';
import TopNav from './top-nav';
import Login from './login';
import Register from './register';
import Events from './events';
import Favorites from './favorites';

import './board.css';

export default function Home() {
    return (
        <div className="home">
            <div className="nav">
                <TopNav />
            </div>
        
        </div>
    );
}