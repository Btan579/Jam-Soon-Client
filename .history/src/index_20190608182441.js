import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';
// import ScrollToTop from "./components/ScrollToTop";
import store from './store';
import ScrollToTop from 'react-router-scroll-top';
import './index.css';



ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </Provider>,
  document.getElementById('root')
);
