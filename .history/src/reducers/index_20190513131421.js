import { combineReducers } from 'redux';
import eventsReducer from "./eventsReducer";
import authReducer from "./authReducer";
import protectedReducer from "./protected-data";
import favoritesReducer from "./favorites";
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
    eventsState: eventsReducer,
    form: formReducer,
    auth: authReducer,
    protected: protectedReducer,
    favorites: favoritesReducer
});

export default rootReducer;



