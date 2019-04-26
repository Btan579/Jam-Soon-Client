import { combineReducers, formReducer } from 'redux';
import eventsReducer from "./eventsReducer";

const rootReducer = combineReducers({
    eventsState: eventsReducer,
    form: formReducer
});

export default rootReducer;



