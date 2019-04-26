import { combineReducers } from 'redux';
import eventsReducer from "./eventsReducer";
import { formReducer } from 'redux-form'
const rootReducer = combineReducers({
    eventsState: eventsReducer,
    form: formReducer
});

export default rootReducer;



