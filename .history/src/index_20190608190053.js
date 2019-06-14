import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';
// import ScrollToTop from 'react-router-scroll-top';
import store from './store';

import './index.css';



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
    

