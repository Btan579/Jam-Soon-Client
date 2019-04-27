import { combineReducers } from 'redux';
import eventsReducer from "./eventsReducer";
import authReducer from "./authReducer";
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
    eventsState: eventsReducer,
    form: formReducer,
    auth: authReducer
});

export default rootReducer;



