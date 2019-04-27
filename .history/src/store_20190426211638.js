import {
    createStore,
    applyMiddleware
} from 'redux';

import rootReducer from "./reducers";

// import reducer from './reducers/reducer';

export default createStore(rootReducer);

// reducer
