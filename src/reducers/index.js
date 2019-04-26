import { combineReducers } from 'redux';
import eventsReducer from "./eventsReducer";
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
    eventsState: eventsReducer,
    form: formReducer
});

export default rootReducer;



