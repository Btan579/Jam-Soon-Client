import {
    createStore,
    applyMiddleware
} from 'redux';
import rootReducer from "./reducers";
import thunk from "redux-thunk";
// import reducer from './reducers/reducer';

export default createStore(rootReducer);

// reducer
