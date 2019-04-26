import { combineReducers } from 'redux';
import eventsReducer from "./eventsReducer";

const rootReducer = combineReducers({
    eventsState: eventsReducer
});

export default rootReducer;



