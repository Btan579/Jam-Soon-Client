import {
    createStore
} from 'redux';

import rootReducer from "./reducers/index";

// import reducer from './reducers/reducer';
const store = createStore(rootReducer);
export default store;

// reducer
